import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer.js';
import { Form, Button } from 'react-bootstrap';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';
import RangeSlider from 'react-bootstrap-range-slider';

import { listSkillDetail, updateSkill } from '../redux/actions/skillActions.js';

import { SKILL_UPDATE_RESET } from '../redux/constants/skillConstants.js';

const SkillEditPage = () => {
  const { id } = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();

  const skillDetail = useSelector((state) => state.skillDetail);
  const { loading, error, skill } = skillDetail;

  const skillUpdate = useSelector((state) => state.skillUpdate);
  const { success: successUpdate } = skillUpdate;
  //
  // Inputs from form control
  const [name, setName] = useState('');
  const [maturity, setMaturity] = useState('beginner');
  const [score, setScore] = useState(4);
  const [category, setCategory] = useState('general');

  useEffect(() => {
    if (successUpdate) {
      history('/admin/skill');
      dispatch({ type: SKILL_UPDATE_RESET });
    } else {
      if (!skill || skill._id !== id) {
        dispatch(listSkillDetail(id));
      } else {
        setName(skill.name);
        setMaturity(skill.maturity);
        setScore(skill.score);
        setCategory(skill.category);
      }
    }
  }, [dispatch, history, successUpdate, skill, id]);
  //
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Skill edit requested.');
    dispatch(
      updateSkill({
        _id: id,
        name,
        maturity,
        score,
        category,
      })
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='warning'>{error}</Message>
      ) : (
        <FormContainer>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name' className='mb-4'>
              <Form.Label>Name of the skill</Form.Label>
              <Form.Control
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='maturity' className='mb-4'>
              <Form.Label>Maturity</Form.Label>
              <Form.Select onChange={(e) => setMaturity(e.target.value)}>
                <option>Open this select menu</option>
                <option value='beginner'>Beginner</option>
                <option value='intermediate'>Intermediate</option>
                <option value='expert'>Expert</option>
              </Form.Select>
              <Form.Text id='validMaturity' muted>
                Select maturity from the three options: beginner, intermediate
                or expert.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='score' className='mb-4'>
              <Form.Label>Score (1-10)</Form.Label>
              <RangeSlider
                min={0}
                max={10}
                tooltip='auto'
                variant='primary'
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
              <Form.Text id='validScore' muted>
                Recommended ranges: beginner (1-4), intermediate (5-8), expert
                (9-10)
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='category' className='mb-4'>
              <Form.Label>Skill category</Form.Label>
              <Form.Select onChange={(e) => setCategory(e.target.value)}>
                <option>Open this select menu</option>
                <option value='business'>Business</option>
                <option value='analytics'>Analytics (data)</option>
                <option value='programming'>Programming</option>
                <option value='general'>General</option>
              </Form.Select>
              <Form.Text id='validCategory' muted>
                Select category from the foure options: business, analytics,
                programming or general.
              </Form.Text>
            </Form.Group>

            <Button variant='primary' type='submit' className='btn btn-block'>
              Update
            </Button>
          </Form>
        </FormContainer>
      )}
    </>
  );
};

export default SkillEditPage;

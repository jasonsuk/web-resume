import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import {
  listSkills,
  createSkill,
  deleteSkill,
} from '../redux/actions/skillActions.js';
import { SKILL_CREATE_RESET } from '../redux/constants/skillConstants.js';

const SkillListPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const skillList = useSelector((state) => state.skillList);
  const { loading, error, skills } = skillList;

  const skillCreate = useSelector((state) => state.skillCreate);
  const { success: successCreate, skill: newSkill } = skillCreate;

  const skillDelete = useSelector((state) => state.skillDelete);
  const { success: successDelete } = skillDelete;

  useEffect(() => {
    if (successCreate) {
      history(`/admin/skill/${newSkill._id}/edit`);
      dispatch({ type: SKILL_CREATE_RESET });
    } else {
      dispatch(listSkills());
    }
  }, [dispatch, successDelete]);

  const createSkillHandler = () => {
    dispatch(createSkill());
  };

  const deleteSkillHandler = (skillId) => {
    if (window.confirm(`Deleting certficiate ${skillId}. Are you sure?`)) {
      dispatch(deleteSkill(skillId));
    }
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='warning'>{error}</Message>
  ) : (
    <Container>
      <Row className='align-items-center'>
        <Col md={8}>
          <h2>List Skills</h2>
        </Col>
        <Col style={{ textAlign: 'end' }}>
          <Button
            variant='dark'
            size='md'
            className='px-3'
            onClick={() => createSkillHandler()}
          >
            + Create certificate
          </Button>
        </Col>
      </Row>
      <Table
        striped
        bordered
        hover
        style={{
          verticalAlign: 'middle',
          textAlign: 'center',
          marginTop: '1.6rem',
        }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Maturity</th>
            <th>Score</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill._id}>
              <td>{skill._id}</td>
              <td>{skill.name}</td>
              <td>{skill.maturity}</td>
              <td>{skill.score}</td>
              <td>{skill.category}</td>
              <td>
                <LinkContainer to={`/admin/skill/${skill._id}/edit`}>
                  <Button className='btn-icon' variant='warning' size='md'>
                    <i className='far fa-edit'></i>
                  </Button>
                </LinkContainer>
              </td>
              <td>
                <Button
                  className='btn-icon'
                  variant='danger'
                  size='md'
                  onClick={() => deleteSkillHandler(skill._id)}
                >
                  <i className='far fa-trash-alt'></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SkillListPage;

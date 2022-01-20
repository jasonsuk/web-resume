import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import { listSkills } from '../redux/actions/skillActions.js';

const SkillListPage = () => {
  const dispatch = useDispatch();
  const skillList = useSelector((state) => state.skillList);
  const { loading, error, skills } = skillList;

  useEffect(() => {
    dispatch(listSkills());
  }, [dispatch]);

  const deleteSkillHandler = (skillId) => {
    console.log('Delete skill requested.');
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='warning'>{error}</Message>
  ) : (
    <Container>
      <h2>List certificate</h2>
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

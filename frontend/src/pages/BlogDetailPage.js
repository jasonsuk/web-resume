// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
// import Banner from '../components/Banner.js';
// import { Container, ListGroup } from 'react-bootstrap';
//
// import Loader from '../components/Loader.js';
// import Message from '../components/Message.js';
//
// import { listPortfolioDetail } from '../redux/actions/portfolioActions.js';
//
// const PortfolioDetailPage = () => {
//   const { id } = useParams();
//
//   const dispatch = useDispatch();
//
//   const portfolioDetail = useSelector((state) => state.portfolioDetail);
//   const { loading, error, portfolio } = portfolioDetail;
//
//   useEffect(() => {
//     dispatch(listPortfolioDetail(id));
//   }, [dispatch, id]);
//
//   return (
//     <>
//       <section>
//         {loading ? (
//           <Loader />
//         ) : error ? (
//           <Message variant='warning'>{error}</Message>
//         ) : (
//           <Container style={{ paddingLeft: '8rem', paddingRight: '8rem' }}>
//             <Banner subject={portfolio.name} body={portfolio.summary} />
//             <ListGroup variant='flush'>
//               <ListGroup.Item>
//                 <h3>Related skills</h3>
//                 <p>Skill1, Skill2, Skill3</p>
//               </ListGroup.Item>
//               <ListGroup.Item>{portfolio.description}</ListGroup.Item>
//               <LinkContainer to='/' className='d-grid gap-2 mt-5'>
//               <Button variant='dark'>Explore  portfolio </Button>
//               </LinkContainer>
//             </ListGroup>
//           </Container>
//         )}
//       </section>
//     </>
//   );
// };
//
// export default PortfolioDetailPage;

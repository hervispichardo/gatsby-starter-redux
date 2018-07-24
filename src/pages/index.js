import React from 'react';
import { connect } from 'react-redux';
import Link from 'gatsby-link';
import { loadOffices as loadOfficesAction } from '../state/offices';

const Index = ({ offices, current}) => (
  <div>
    <h1>Hi Hervis</h1>
    <p>Oficinas: {offices}</p>
    <p>current: {current}</p>
    <Link to="/About/">Go to page 2</Link>
  </div>
);

export default connect(
  state => ({
    offices: state.offices.list,
    current: state.offices.current,
  }),
  dispatch => ({ loadOffices: () => loadOfficesAction() }),
)(Index);


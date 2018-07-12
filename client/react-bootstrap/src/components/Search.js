import React, { Component } from 'react'
import { Grid, Col, Button} from 'react-bootstrap';
import './Search.css';

export default class About extends Component {

    render() {

        return (

            <div>

            <h1>Search Records</h1>

            <Grid>
            <Col  xs={12} sm={8} smOffest={2}>
            <Button bsStyle="primary">Record List</Button>
            </Col>
            <Col>
        <Button bsStyle="primary">Frequency Count</Button>

        </Col>
        </Grid>
        </div>

        )
    }
}
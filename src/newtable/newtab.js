import React, { useState, useEffect } from "react";
import { fetchDistricts } from "../api/fetchApi";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from "../newtable/newtable.css";


const NewTabular = () => {
    const [fetchedState, setFetchedState] = useState([])

    useEffect(() => {
        const fetchAPIState = async () => {
            const dailyData = await fetchDistricts()
            setFetchedState(dailyData)
            console.log(dailyData)
        }
        fetchAPIState()
    }, [])




    return (

        <>
            <div className="container">
                {/* Tabular data displaying data from all states of NE-India */}

                {/* ASSAM */}
                <TableContainer component={Paper}>
                    <Table className={styles.container} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell className="alert alert-secondary">Arunachal Pradesh Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>
                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {/* {fetchedState.arunachal.map((e, i) => ( */}
                            <TableRow >
                                <TableCell component="th" scope="row">
                                    Lohit
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right"></TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right"></TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right"></TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right"></TableCell>
                            </TableRow>
                            {/* ))} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )

}

export default NewTabular



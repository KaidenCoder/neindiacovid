import React, { useState, useEffect } from "react";
import { fetchDataCountries } from "../../apiWorld/fetchApi";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from "../tableWorld/table.css";


const Tabular = () => {

    const [fetchedState, setFetchedState] = useState([])

    useEffect(() => {
        const fetchAPIState = async () => {
            const dailyData = await fetchDataCountries()
            setFetchedState(dailyData)
            // console.log(dailyData)
        }
        fetchAPIState()
    }, [])

    return (
        <>
            <div className="container">
                <TableContainer component={Paper}>
                    <Table className={styles.container} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary" style={{ fontFamily: 'monospace', fontSize: '14px' }}>Country</TableCell>
                                <TableCell className="alert alert-warning" align="center" style={{ fontFamily: 'monospace', fontSize: '14px' }}>Total Confirmed</TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.6)', fontFamily: 'monospace', fontSize: '14px' }} align="center">New Confirmed</TableCell>
                                <TableCell className="alert alert-success" align="center" style={{ fontFamily: 'monospace', fontSize: '14px' }}>Total Recovered</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.6)', fontFamily: 'monospace', fontSize: '14px' }} align="center">New Recovered</TableCell>
                                <TableCell className="alert alert-danger" align="center" style={{ fontFamily: 'monospace', fontSize: '14px' }}>Total Deaths</TableCell>
                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.6)', fontFamily: 'monospace', fontSize: '14px' }} align="center">New Deaths</TableCell>


                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {fetchedState.map((e, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row" style={{ fontFamily: 'monospace', fontSize: '14px' }}>
                                        {e.Country}
                                    </TableCell>
                                    <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)', fontFamily: 'monospace', fontSize: '14px' }} align="right">{parseInt(e.TotalConfirmed)}</TableCell>
                                    <TableCell style={{ background: 'rgba(255, 241, 194, 0.3)', fontFamily: 'monospace', fontSize: '14px' }} align="right">{parseInt(e.NewConfirmed)}</TableCell>
                                    <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)', fontFamily: 'monospace', fontSize: '14px' }} align="right">{parseInt(e.TotalRecovered)}</TableCell>
                                    <TableCell style={{ background: 'rgba(203, 234, 209, 0.3)', fontFamily: 'monospace', fontSize: '14px' }} align="right">{parseInt(e.NewRecovered)}</TableCell>
                                    <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)', fontFamily: 'monospace', fontSize: '14px' }} align="right">{parseInt(e.TotalDeaths)}</TableCell>
                                    <TableCell style={{ background: 'rgba(246, 204, 209, 0.3)', fontFamily: 'monospace', fontSize: '14px' }} align="right">{parseInt(e.NewDeaths)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )

}
export default Tabular
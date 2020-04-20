import React, { useState, useEffect } from "react";
import { fetchData } from "../api/fetchApi";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from "../table/table.css";

const Tabular = () => {
    const [fetchedState, setFetchedState] = useState([])

    useEffect(() => {
        const fetchAPIState = async () => {
            const dailyData = await fetchData()
            setFetchedState(dailyData)
            //console.log(dailyData)
        }
        fetchAPIState()
    }, [])
    const arunachalTotal = parseInt(fetchedState.lohit)
    const assamTotal = parseInt(fetchedState.cachar) + parseInt(fetchedState.kamrupmetro)
        + parseInt(fetchedState.jorhat) + parseInt(fetchedState.goalpara) + parseInt(fetchedState.nalbari)
        + parseInt(fetchedState.salmara) + parseInt(fetchedState.kamrup) + parseInt(fetchedState.morigaon)
        + parseInt(fetchedState.golaghat) + parseInt(fetchedState.lakhimpur) + parseInt(fetchedState.dhubri)
        + parseInt(fetchedState.hailakandi)
    const manipurTotal = parseInt(fetchedState.imphalwest) + parseInt(fetchedState.imphaleast)
    const meghalayaTotal = parseInt(fetchedState.eastkhasi) + parseInt(fetchedState.unknown)
    const mizoramTotal = parseInt(fetchedState.aizawl)
    // const nagalandTotal = parseInt(fetchedState.dimapur)
    const tripuraTotal = parseInt(fetchedState.gomati) + parseInt(fetchedState.northtripura)

    const total = arunachalTotal + assamTotal + manipurTotal + meghalayaTotal + mizoramTotal
        + tripuraTotal

    return (

        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Total Infected Cases in North East
                     </div>
                    <div className="card-body">
                        <h5 className="card-title">Infected Cases</h5>
                        <p className="card-text">{total || "Loading..."}</p>
                        <a href="https://covidindiastats.netlify.app/" className="btn btn-primary">Find More</a>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="container">
                {/* Tabular data displaying data from all states of NE-India */}

                {/* ASSAM */}
                <TableContainer component={Paper}>
                    <Table className={styles.container} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert-secondary">Arunachal Pradesh Districts</TableCell>
                                <TableCell className="alert-warning" align="right">Infected</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Lohit
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.lohit}</TableCell>
                            </TableRow>
                        </TableBody>


                        {/* ASSAM */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert-secondary">Assam Districts</TableCell>
                                <TableCell className="alert-warning" align="right">Infected</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            {/* Assam */}
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Cachar
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.cachar}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Kamrup Metropolitan
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.kamrupmetro}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Jorhat
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.jorhat}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Goalpara
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.goalpara}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Nalbari
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.nalbari}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    South Salmara Mancachar
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.salmara}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Kamrup
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.kamrup}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Morigaon
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.morigaon}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Golaghat
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.golaghat}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Lakhimpur
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.lakhimpur}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Dhubri
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.dhubri}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Hailakandi
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.hailakandi}</TableCell>
                            </TableRow>
                        </TableBody>

                        {/* MANIPUR */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert-secondary">Manipur Districts</TableCell>
                                <TableCell className="alert-warning" align="right">Infected</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Imphal West
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.imphalwest}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Imphal East
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.imphaleast}</TableCell>
                            </TableRow>
                        </TableBody>

                        {/* MEGHALAYA */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert-secondary">Meghalaya Districts</TableCell>
                                <TableCell className="alert-warning" align="right">Infected</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    East Khasi Hills
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.eastkhasi}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Unknown
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.unknown}</TableCell>
                            </TableRow>
                        </TableBody>

                        {/* MIZORAM */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert-secondary">Mizoram Districts</TableCell>
                                <TableCell className="alert-warning" align="right">Infected</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Aizawl
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.aizawl}</TableCell>
                            </TableRow>
                        </TableBody>

                        {/* NAGALAND */}
                        {/* <TableHead>
                            <TableRow>
                                <TableCell className="alert-secondary">Nagaland Districts</TableCell>
                                <TableCell className="alert-warning" align="right">Infected</TableCell>
                            </TableRow>
                        </TableHead>
              
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Dimapur
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.dimapur}</TableCell>
                            </TableRow>
                        </TableBody> */}

                        {/* TRIPURA */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert-secondary">Tripura Districts</TableCell>
                                <TableCell className="alert-warning" align="right">Infected</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Gomati
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.gomati}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    North Tripura
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.northtripura}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )

}

export default Tabular



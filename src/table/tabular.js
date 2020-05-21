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

    const assamTotal = parseInt(fetchedState.biswanath) + parseInt(fetchedState.bongaigaon) + parseInt(fetchedState.cachar) + parseInt(fetchedState.dhubri) + parseInt(fetchedState.dibrugarh)
        + parseInt(fetchedState.goalpara) + parseInt(fetchedState.golaghat) + parseInt(fetchedState.hailakandi) + parseInt(fetchedState.hojai) + parseInt(fetchedState.jorhat)
        + parseInt(fetchedState.kamrup) + parseInt(fetchedState.karimganj) + parseInt(fetchedState.kamrupmetro) + parseInt(fetchedState.kokrajhar) +
        + parseInt(fetchedState.lakhimpur) + parseInt(fetchedState.morigaon) + parseInt(fetchedState.nagaon) + parseInt(fetchedState.nalbari)
        + parseInt(fetchedState.salmara) + parseInt(fetchedState.sivasagar) + parseInt(fetchedState.sonitpur)
        + parseInt(fetchedState.unknownassam)

    const manipurTotal = parseInt(fetchedState.churachandpur) + parseInt(fetchedState.imphalwest) + parseInt(fetchedState.imphaleast)

    const meghalayaTotal = parseInt(fetchedState.eastkhasi)

    const mizoramTotal = parseInt(fetchedState.aizawl)

    // const nagalandTotal = parseInt(fetchedState.dimapur)
    const tripuraTotal = parseInt(fetchedState.dhalai) + parseInt(fetchedState.gomati) + parseInt(fetchedState.khowai) + parseInt(fetchedState.northtripura)

    const total = arunachalTotal + assamTotal + manipurTotal + meghalayaTotal + mizoramTotal
        + tripuraTotal



    return (

        <>

            <div className="container">
                <div className="card" style={{}}>
                    <div className="card-header" style={{ background: 'rgba(255, 241, 194, 0.5)' }}>
                        Total Confirmed Cases in North East
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center" style={{ color: 'rgba(0, 0, 0, 0.54)', fontFamily: "Arial", fontSize: '20px' }}>Total Confirmed Cases</h5>
                        {/* style={{ color: 'rgba(0, 0, 0, 0.5)' }} */}
                        <h5 className="card-text text-center">{total || "Loading..."}</h5>
                        <br></br>
                        {/* <h6 style={{ textAlign: 'center' }} > <button type="button" className="btn btn-light"><span style={{ color: 'rgb(0,0,0,0.4)' }}>Check Total India Cases</span><a href="https://covidindiastats.netlify.app/"> (Link)</a></button></h6> */}
                        <p className="text-center"><a href="https://covidindiastats.netlify.app/" className="btn btn-primary ">Read More</a></p>
                    </div>
                    <div className="card-header" style={{ background: 'rgba(255, 241, 194, 0.5)' }}>

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
                            <TableRow >
                                <TableCell className="alert alert-secondary">Arunachal Pradesh Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>
                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Lohit
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.lohit}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.lohitactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.lohitdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.lohitrecovered}</TableCell>
                            </TableRow>
                        </TableBody>


                        {/* ASSAM */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Assam Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>

                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            {/* Assam */}
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Biswanath
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.biswanath}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.biswanathactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.biswanathdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.biswanathrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Bongaigaon
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.bongaigaon}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.bongaigaonactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.bongaigaondeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.bongaigaonrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Cachar
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.cachar}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.cacharactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.cachardeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.cacharrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Dhubri
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.dhubri}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.dhubriactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.dhubrideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.dhubrirecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Dibrugarh
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.dibrugarh}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.dibrugarhactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.dibrugarhdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.dibrugarhrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Goalpara
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.goalpara}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.goalparaactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.goalparadeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.goalpararecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Golaghat
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.golaghat}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.golaghatactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.golaghatdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.golaghatrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Hailakandi
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.hailakandi}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.hailakandiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.hailakandideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.hailakandirecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Hojai
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.hojai}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.hojaiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.hojaideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.hojairecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Jorhat
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.jorhat}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.jorhatactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.jorhatdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.jorhatrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Kamrup
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.kamrup}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.kamrupactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.kamrupdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.kamruprecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Kamrup Metropolitan
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.kamrupmetro}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.kamrupmetroactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.kamrupmetrodeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.kamrupmetrorecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Karimganj
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.karimganj}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.karimganjactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.karimganjdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.karimganjrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Kokrajhar
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.kokrajhar}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.kokrajharactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.kokrajhardeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.kokrajharrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Lakhimpur
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.lakhimpur}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.lakhimpuractive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.lakhimpurdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.lakhimpurrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Morigaon
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.morigaon}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.morigaonactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.morigaondeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.morigaonrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Nagaon
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.nagaon}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.nagaonactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.nagaondeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.nagaonrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Nalbari
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.nalbari}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.nalbariactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.nalbarideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.nalbarirecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Sivasagar
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.sivasagar}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.sivasagaractive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.sivasagardeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.sivasagarrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Sonitpur
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.sonitpur}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.sonitpuractive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.sonitpurdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.sonitpurrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    South Salmara Mankachar
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.salmara}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.salmaraactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.salmaradeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.salmararecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Other State
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.unknownassam}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.unknownassamactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.unknownassamdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.unknownassamrecovered}</TableCell>
                            </TableRow>
                        </TableBody>

                        {/* MANIPUR */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Manipur Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>

                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Churachandpur
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.churachandpur}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.churachandpuractive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.churachandpurdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.churachandpurrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Imphal East
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.imphaleast}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.imphaleastactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.imphaleastdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.imphaleastrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Imphal West
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.imphalwest}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.imphalwestactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.imphalwestdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.imphalwestrecovered}</TableCell>
                            </TableRow>
                        </TableBody>

                        {/* MEGHALAYA */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Meghalaya Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>

                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    East Khasi Hills
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.eastkhasi}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.eastkhasiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.eastkhasideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.eastkhasirecovered}</TableCell>
                            </TableRow>
                            {/* <TableRow>
                                <TableCell component="th" scope="row">
                                    Unknown
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.unknown}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.unknownactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.unknowndeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.unknownrecovered}</TableCell>
                            </TableRow> */}
                        </TableBody>

                        {/* MIZORAM */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Mizoram Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>

                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Aizawl
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.aizawl}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.aizawlactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.aizawldeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.aizawlrecovered}</TableCell>
                            </TableRow>
                        </TableBody>

                        {/* NAGALAND */}
                        {/* <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Nagaland Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Infected</TableCell>
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
                                <TableCell className="alert alert-secondary">Tripura Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>

                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            <TableRow>
                                <TableCell style={{ background: 'rgba(204, 207, 208, 0.1)' }} component="th" scope="row">
                                    Dhalai
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.dhalai}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.dhalaiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.dhalaideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.dhalairecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ background: 'rgba(204, 207, 208, 0.1)' }} component="th" scope="row">
                                    Gomati
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.gomati}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.gomatiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.gomatideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.gomatirecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ background: 'rgba(204, 207, 208, 0.1)' }} component="th" scope="row">
                                    Khowai
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.khowai}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.khowaiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.khowaideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.khowairecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ background: 'rgba(204, 207, 208, 0.1)' }} component="th" scope="row">
                                    North Tripura
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.northtripura}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.northtripuraactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.northtripuradeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.northtripurarecovered}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )

}

export default Tabular



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
    const arunachalTotal = parseInt(fetchedState.changlang) + parseInt(fetchedState.lohit) + parseInt(fetchedState.namsai)
        + parseInt(fetchedState.pakke) + parseInt(fetchedState.papum) + parseInt(fetchedState.tawang) + parseInt(fetchedState.uppersiang)

    const assamTotal = parseInt(fetchedState.baksa) + parseInt(fetchedState.barpeta) + parseInt(fetchedState.biswanath) + parseInt(fetchedState.bongaigaon) + parseInt(fetchedState.cachar)
        + parseInt(fetchedState.charaideo) + parseInt(fetchedState.chirang) + parseInt(fetchedState.darrang)
        + parseInt(fetchedState.dhubri) + parseInt(fetchedState.dima) + parseInt(fetchedState.dibrugarh)
        + parseInt(fetchedState.goalpara) + parseInt(fetchedState.golaghat) + parseInt(fetchedState.hailakandi) + parseInt(fetchedState.hojai) + parseInt(fetchedState.jorhat)
        + parseInt(fetchedState.kamrup) + parseInt(fetchedState.karbianglong) + parseInt(fetchedState.karimganj) + parseInt(fetchedState.kamrupmetro) + parseInt(fetchedState.kokrajhar) +
        + parseInt(fetchedState.lakhimpur) + parseInt(fetchedState.morigaon) + parseInt(fetchedState.nagaon) + parseInt(fetchedState.nalbari)
        + parseInt(fetchedState.salmara) + parseInt(fetchedState.sivasagar) + parseInt(fetchedState.sonitpur) + parseInt(fetchedState.tinsukia)
        + parseInt(fetchedState.udalguri) + parseInt(fetchedState.westkarbi) + parseInt(fetchedState.unknownassam)

    const manipurTotal = parseInt(fetchedState.bishnupur) + parseInt(fetchedState.chandel) + parseInt(fetchedState.churachandpur) + parseInt(fetchedState.imphalwest)
        + parseInt(fetchedState.imphaleast) + parseInt(fetchedState.kakching) + parseInt(fetchedState.kamjong) + parseInt(fetchedState.kangpokpi) + parseInt(fetchedState.noney)
        + parseInt(fetchedState.senapati) + parseInt(fetchedState.tamenglong) + parseInt(fetchedState.tengnoupal) + parseInt(fetchedState.thoubal) + parseInt(fetchedState.ukhrul)

    const meghalayaTotal = parseInt(fetchedState.eastkhasi) + parseInt(fetchedState.northgaro) + parseInt(fetchedState.southwestgaro)
        + parseInt(fetchedState.westgaro) + parseInt(fetchedState.westjaintia) + parseInt(fetchedState.westkhasi)

    const mizoramTotal = parseInt(fetchedState.aizawl) + parseInt(fetchedState.lunglei) + parseInt(fetchedState.mamit) + parseInt(fetchedState.saitual) + parseInt(fetchedState.serchhip)

    const nagalandTotal = parseInt(fetchedState.dimapur) + parseInt(fetchedState.kohima) + parseInt(fetchedState.tuensang)
    const sikkimTotal = parseInt(fetchedState.eastsikkim) + parseInt(fetchedState.southsikkim)

    const tripuraTotal = parseInt(fetchedState.dhalai) + parseInt(fetchedState.gomati)
        + parseInt(fetchedState.khowai) + parseInt(fetchedState.northtripura)
        + parseInt(fetchedState.sipahijala) + parseInt(fetchedState.southtripura)
        + parseInt(fetchedState.unokoti) + parseInt(fetchedState.westtripura)

    const total = arunachalTotal + assamTotal + manipurTotal + meghalayaTotal + mizoramTotal
        + nagalandTotal + sikkimTotal + tripuraTotal



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

                {/* ARUNACHAL*/}
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
                                    Changlang
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.changlang}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.changlangactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.changlangdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.changlangrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Lohit
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.lohit}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.lohitactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.lohitdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.lohitrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Namsai
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.namsai}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.namsaiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.namsaideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.namsairecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Pakke Kessang
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.pakke}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.pakkeactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.pakkedeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.pakkerecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Papum Pare
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.papum}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.papumactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.papumdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.papumrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Tawang
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.tawang}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.tawangactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.tawangdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.tawangrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Upper Siang
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.uppersiang}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.uppersiangactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.uppersiangdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.uppersiangrecovered}</TableCell>
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
                                    Baksa
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.baksa}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.baksaactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.baksadeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.baksarecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Barpeta
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.barpeta}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.barpetaactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.barpetadeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.barpetarecovered}</TableCell>
                            </TableRow>
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
                                    Charaideo
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.charaideo}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.charaideoactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.charaideodeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.charaideorecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Chirang
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.chirang}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.chirangactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.chirangdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.chirangrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Darrang
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.darrang}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.darrangactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.darrangdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.darrangrecovered}</TableCell>
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
                                    Dima Hasao
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.dima}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.dimaactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.dimadeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.dimarecovered}</TableCell>
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
                                    Karbi Anglong
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.karbianglong}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.karbianglongactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.karbianglongdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.karbianglongrecovered}</TableCell>
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
                                    Tinsukia
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.tinsukia}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.tinsukiaactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.tinsukiadeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.tinsukiarecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Udalguri
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.udalguri}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.udalguriactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.udalgurideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.udalgurirecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    West Karbi Anglong
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.westkarbi}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.westkarbiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.westkarbideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.westkarbirecovered}</TableCell>
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
                                    Bishnupur
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.bishnupur}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.bishnupuractive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.bishnupurdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.bishnupurrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Chandel
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.chandel}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.chandelactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.chandeldeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.chandelrecovered}</TableCell>
                            </TableRow>
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
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Kakching
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.kakching}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.kakchingactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.kakchingdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.kakchingrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Kamjong
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.kamjong}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.kamjongactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.kamjongdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.kamjongrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Kangpokpi
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.kangpokpi}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.kangpokpiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.kangpokpideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.kangpokpirecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Noney
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.noney}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.noneyactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.noneydeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.noneyrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Senapati
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.senapati}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.senapatiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.senapatideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.senapatirecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Tamenglong
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.tamenglong}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.tamenglongactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.tamenglongdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.tamenglongrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Tengnoupal
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.tengnoupal}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.tengnoupalactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.tengnoupaldeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.tengnoupalrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Thoubal
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.thoubal}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.thoubalactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.thoubaldeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.thoubalrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Ukhrul
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.ukhrul}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.ukhrulactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.ukhruldeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.ukhrulrecovered}</TableCell>
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
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    North Garo Hills
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.northgaro}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.northgaroactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.northgarodeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.northgarorecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    South West Garo Hills
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.southwestgaro}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.southwestgaroactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.southwestgarodeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.southwestgarorecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    West Garo Hills
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.westgaro}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.westgaroactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.westgarodeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.westgarorecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    West Jaintia Hills
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.westjaintia}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.westjaintiaactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.westjaintiadeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.westjaintiarecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    West Khasi Hills
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.westkhasi}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.westkhasiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.westkhasideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.westkhasirecovered}</TableCell>
                            </TableRow>
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
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Lunglei
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.lunglei}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.lungleiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.lungleideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.lungleirecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Mamit
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.mamit}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.mamitactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.mamitdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.mamitrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Saitual
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.saitual}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.saitualactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.saitualdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.saitualrecovered}</TableCell>
                            </TableRow>
                            {/* <TableRow>
                                <TableCell component="th" scope="row">
                                    Serchhip
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.serchhip}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.serchhipactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.serchhipdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.serchhiprecovered}</TableCell>
                            </TableRow> */}
                        </TableBody>

                        {/* NAGALAND */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Nagaland Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>

                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Dimapur
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.dimapur}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.dimapuractive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.dimapurdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.dimapurrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Kohima
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.kohima}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.kohimaactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.kohimadeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.kohimarecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Tuensang
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.tuensang}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.tuensangactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.tuensangdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.tuensangrecovered}</TableCell>
                            </TableRow>
                        </TableBody>
                        {/* SIKKIM */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Sikkim Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>

                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    East Sikkim
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.eastsikkim}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.eastsikkimactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.eastsikkimdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.eastsikkimrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    South Sikkim
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.southsikkim}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.southsikkimactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.southsikkimdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.southsikkimrecovered}</TableCell>
                            </TableRow>
                        </TableBody>

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
                            <TableRow>
                                <TableCell style={{ background: 'rgba(204, 207, 208, 0.1)' }} component="th" scope="row">
                                    Sipahijala
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.sipahijala}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.sipahijalaactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.sipahijaladeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.sipahijalarecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ background: 'rgba(204, 207, 208, 0.1)' }} component="th" scope="row">
                                    South Tripura
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.southtripura}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.southtripuraactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.southtripuradeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.southtripurarecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ background: 'rgba(204, 207, 208, 0.1)' }} component="th" scope="row">
                                    Unokoti
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.unokoti}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.unokotiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.unokotideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.unokotirecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ background: 'rgba(204, 207, 208, 0.1)' }} component="th" scope="row">
                                    West Tripura
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.westtripura}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.westtripuraactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.westtripuradeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.westtripurarecovered}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )

}

export default Tabular



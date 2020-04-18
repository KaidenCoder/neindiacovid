const url = 'https://api.covid19india.org/state_district_wise.json'

export const fetchData = async () => {
    try {
        const response = await (await fetch(url)).json();
        // console.log(response)
        const modifiedData =

        {
            //Arunachal
            lohit: [response['Arunachal Pradesh']['districtData']['Lohit']['confirmed']],
            //Assam
            cachar: [response['Assam']['districtData']['Cachar']['confirmed']],
            kamrupmetro: [response['Assam']['districtData']['Kamrup Metropolitan']['confirmed']],
            jorhat: [response['Assam']['districtData']['Jorhat']['confirmed']],
            goalpara: [response['Assam']['districtData']['Goalpara']['confirmed']],
            nalbari: [response['Assam']['districtData']['Nalbari']['confirmed']],
            salmara: [response['Assam']['districtData']['South Salmara Mancachar']['confirmed']],
            kamrup: [response['Assam']['districtData']['Kamrup']['confirmed']],
            morigaon: [response['Assam']['districtData']['Morigaon']['confirmed']],
            golaghat: [response['Assam']['districtData']['Golaghat']['confirmed']],
            lakhimpur: [response['Assam']['districtData']['Lakhimpur']['confirmed']],
            dhubri: [response['Assam']['districtData']['Dhubri']['confirmed']],
            hailakandi: [response['Assam']['districtData']['Hailakandi']['confirmed']],
            // barpeta: [response['Assam']['districtData']['Barpeta']['confirmed']],
            //Manipur
            imphalwest: [response['Manipur']['districtData']['Imphal West']['confirmed']],
            imphaleast: [response['Manipur']['districtData']['Imphal East']['confirmed']],
            //Meghalaya
            eastkhasi: [response['Meghalaya']['districtData']['East Khasi Hills']['confirmed']],
            unknown: [response['Meghalaya']['districtData']['Unknown']['confirmed']],
            //Mizoram
            aizawl: [response['Mizoram']['districtData']['Aizawl']['confirmed']],
            //Nagaland
            dimapur: [response['Nagaland']['districtData']['Dimapur']['confirmed']],
            //Tripura
            gomati: [response['Tripura']['districtData']['Gomati']['confirmed']],
            northtripura: [response['Tripura']['districtData']['North Tripura']['confirmed']],
        }
        return modifiedData
    } catch (error) {

    }
}


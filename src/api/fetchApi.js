const url = 'https://api.covid19india.org/state_district_wise.json'

export const fetchData = async () => {
    try {
        const response = await (await fetch(url)).json();
        // console.log(response)
        const modifiedData =

        {
            //Arunachal
            lohit: [response['Arunachal Pradesh']['districtData']['Lohit']['confirmed']],
            lohitactive: [response['Arunachal Pradesh']['districtData']['Lohit']['active']],
            lohitdeceased: [response['Arunachal Pradesh']['districtData']['Lohit']['deceased']],
            lohitrecovered: [response['Arunachal Pradesh']['districtData']['Lohit']['recovered']],
            //Assam
            bongaigaon: [response['Assam']['districtData']['Bongaigaon']['confirmed']],
            bongaigaonactive: [response['Assam']['districtData']['Bongaigaon']['active']],
            bongaigaondeceased: [response['Assam']['districtData']['Bongaigaon']['deceased']],
            bongaigaonrecovered: [response['Assam']['districtData']['Bongaigaon']['recovered']],
            cachar: [response['Assam']['districtData']['Cachar']['confirmed']],
            cacharactive: [response['Assam']['districtData']['Cachar']['active']],
            cachardeceased: [response['Assam']['districtData']['Cachar']['deceased']],
            cacharrecovered: [response['Assam']['districtData']['Cachar']['recovered']],
            dhubri: [response['Assam']['districtData']['Dhubri']['confirmed']],
            dhubriactive: [response['Assam']['districtData']['Dhubri']['active']],
            dhubrideceased: [response['Assam']['districtData']['Dhubri']['deceased']],
            dhubrirecovered: [response['Assam']['districtData']['Dhubri']['recovered']],
            goalpara: [response['Assam']['districtData']['Goalpara']['confirmed']],
            goalparaactive: [response['Assam']['districtData']['Goalpara']['active']],
            goalparadeceased: [response['Assam']['districtData']['Goalpara']['deceased']],
            goalpararecovered: [response['Assam']['districtData']['Goalpara']['recovered']],
            golaghat: [response['Assam']['districtData']['Golaghat']['confirmed']],
            golaghatactive: [response['Assam']['districtData']['Golaghat']['active']],
            golaghatdeceased: [response['Assam']['districtData']['Golaghat']['deceased']],
            golaghatrecovered: [response['Assam']['districtData']['Golaghat']['recovered']],
            hailakandi: [response['Assam']['districtData']['Hailakandi']['confirmed']],
            hailakandiactive: [response['Assam']['districtData']['Hailakandi']['active']],
            hailakandideceased: [response['Assam']['districtData']['Hailakandi']['deceased']],
            hailakandirecovered: [response['Assam']['districtData']['Hailakandi']['recovered']],
            kamrup: [response['Assam']['districtData']['Kamrup']['confirmed']],
            kamrupactive: [response['Assam']['districtData']['Kamrup']['active']],
            kamrupdeceased: [response['Assam']['districtData']['Kamrup']['deceased']],
            kamruprecovered: [response['Assam']['districtData']['Kamrup']['recovered']],
            kamrupmetro: [response['Assam']['districtData']['Kamrup Metropolitan']['confirmed']],
            kamrupmetroactive: [response['Assam']['districtData']['Kamrup Metropolitan']['active']],
            kamrupmetrodeceased: [response['Assam']['districtData']['Kamrup Metropolitan']['deceased']],
            kamrupmetrorecovered: [response['Assam']['districtData']['Kamrup Metropolitan']['recovered']],
            karimganj: [response['Assam']['districtData']['Karimganj']['confirmed']],
            karimganjactive: [response['Assam']['districtData']['Karimganj']['active']],
            karimganjdeceased: [response['Assam']['districtData']['Karimganj']['deceased']],
            karimganjrecovered: [response['Assam']['districtData']['Karimganj']['recovered']],
            lakhimpur: [response['Assam']['districtData']['Lakhimpur']['confirmed']],
            lakhimpuractive: [response['Assam']['districtData']['Lakhimpur']['active']],
            lakhimpurdeceased: [response['Assam']['districtData']['Lakhimpur']['deceased']],
            lakhimpurrecovered: [response['Assam']['districtData']['Lakhimpur']['recovered']],
            morigaon: [response['Assam']['districtData']['Morigaon']['confirmed']],
            morigaonactive: [response['Assam']['districtData']['Morigaon']['active']],
            morigaondeceased: [response['Assam']['districtData']['Morigaon']['deceased']],
            morigaonrecovered: [response['Assam']['districtData']['Morigaon']['recovered']],
            nalbari: [response['Assam']['districtData']['Nalbari']['confirmed']],
            nalbariactive: [response['Assam']['districtData']['Nalbari']['active']],
            nalbarideceased: [response['Assam']['districtData']['Nalbari']['deceased']],
            nalbarirecovered: [response['Assam']['districtData']['Nalbari']['recovered']],
            salmara: [response['Assam']['districtData']['South Salmara Mancachar']['confirmed']],
            salmaraactive: [response['Assam']['districtData']['South Salmara Mancachar']['active']],
            salmaradeceased: [response['Assam']['districtData']['South Salmara Mancachar']['deceased']],
            salmararecovered: [response['Assam']['districtData']['South Salmara Mancachar']['recovered']],
            unknownassam: [response['Assam']['districtData']['Other State']['confirmed']],
            unknownassamactive: [response['Assam']['districtData']['Other State']['active']],
            unknownassamdeceased: [response['Assam']['districtData']['Other State']['deceased']],
            unknownassamrecovered: [response['Assam']['districtData']['Other State']['recovered']],
            // barpeta: [response['Assam']['districtData']['Barpeta']['confirmed']],
            //Manipur
            imphaleast: [response['Manipur']['districtData']['Imphal East']['confirmed']],
            imphaleastactive: [response['Manipur']['districtData']['Imphal East']['active']],
            imphaleastdeceased: [response['Manipur']['districtData']['Imphal East']['deceased']],
            imphaleastrecovered: [response['Manipur']['districtData']['Imphal East']['recovered']],
            imphalwest: [response['Manipur']['districtData']['Imphal West']['confirmed']],
            imphalwestactive: [response['Manipur']['districtData']['Imphal West']['active']],
            imphalwestdeceased: [response['Manipur']['districtData']['Imphal West']['deceased']],
            imphalwestrecovered: [response['Manipur']['districtData']['Imphal West']['recovered']],
            //Meghalaya
            eastkhasi: [response['Meghalaya']['districtData']['East Khasi Hills']['confirmed']],
            eastkhasiactive: [response['Meghalaya']['districtData']['East Khasi Hills']['active']],
            eastkhasideceased: [response['Meghalaya']['districtData']['East Khasi Hills']['deceased']],
            eastkhasirecovered: [response['Meghalaya']['districtData']['East Khasi Hills']['recovered']],
            // unknown: [response['Meghalaya']['districtData']['Unknown']['confirmed']],
            // unknownactive: [response['Meghalaya']['districtData']['Unknown']['active']],
            // unknowndeceased: [response['Meghalaya']['districtData']['Unknown']['deceased']],
            // unknownrecovered: [response['Meghalaya']['districtData']['Unknown']['recovered']],
            //Mizoram
            aizawl: [response['Mizoram']['districtData']['Aizawl']['confirmed']],
            aizawlactive: [response['Mizoram']['districtData']['Aizawl']['active']],
            aizawldeceased: [response['Mizoram']['districtData']['Aizawl']['deceased']],
            aizawlrecovered: [response['Mizoram']['districtData']['Aizawl']['recovered']],
            //Nagaland
            // dimapur: [response['Nagaland']['districtData']['Dimapur']['confirmed']],
            //Tripura
            gomati: [response['Tripura']['districtData']['Gomati']['confirmed']],
            gomatiactive: [response['Tripura']['districtData']['Gomati']['active']],
            gomatideceased: [response['Tripura']['districtData']['Gomati']['deceased']],
            gomatirecovered: [response['Tripura']['districtData']['Gomati']['recovered']],
            northtripura: [response['Tripura']['districtData']['North Tripura']['confirmed']],
            northtripuraactive: [response['Tripura']['districtData']['North Tripura']['active']],
            northtripuradeceased: [response['Tripura']['districtData']['North Tripura']['deceased']],
            northtripurarecovered: [response['Tripura']['districtData']['North Tripura']['recovered']],
        }
        return modifiedData
    } catch (error) {

    }
}


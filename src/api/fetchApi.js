const url = 'https://api.covid19india.org/state_district_wise.json'

export const fetchDistricts = async () => {
    try {
        const response = await (await fetch(url)).json();
        const modifiedData = {
            arunachal: [response['Arunachal Pradesh']]
        }
        return modifiedData
    } catch (error) {

    }
}

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
            barpeta: [response['Assam']['districtData']['Barpeta']['confirmed']],
            barpetaactive: [response['Assam']['districtData']['Barpeta']['active']],
            barpetadeceased: [response['Assam']['districtData']['Barpeta']['deceased']],
            barpetarecovered: [response['Assam']['districtData']['Barpeta']['recovered']],
            biswanath: [response['Assam']['districtData']['Biswanath']['confirmed']],
            biswanathactive: [response['Assam']['districtData']['Biswanath']['active']],
            biswanathdeceased: [response['Assam']['districtData']['Biswanath']['deceased']],
            biswanathrecovered: [response['Assam']['districtData']['Biswanath']['recovered']],
            bongaigaon: [response['Assam']['districtData']['Bongaigaon']['confirmed']],
            bongaigaonactive: [response['Assam']['districtData']['Bongaigaon']['active']],
            bongaigaondeceased: [response['Assam']['districtData']['Bongaigaon']['deceased']],
            bongaigaonrecovered: [response['Assam']['districtData']['Bongaigaon']['recovered']],
            cachar: [response['Assam']['districtData']['Cachar']['confirmed']],
            cacharactive: [response['Assam']['districtData']['Cachar']['active']],
            cachardeceased: [response['Assam']['districtData']['Cachar']['deceased']],
            cacharrecovered: [response['Assam']['districtData']['Cachar']['recovered']],
            charaideo: [response['Assam']['districtData']['Charaideo']['confirmed']],
            charaideoactive: [response['Assam']['districtData']['Charaideo']['active']],
            charaideodeceased: [response['Assam']['districtData']['Charaideo']['deceased']],
            charaideorecovered: [response['Assam']['districtData']['Charaideo']['recovered']],
            chirang: [response['Assam']['districtData']['Chirang']['confirmed']],
            chirangactive: [response['Assam']['districtData']['Chirang']['active']],
            chirangdeceased: [response['Assam']['districtData']['Chirang']['deceased']],
            chirangrecovered: [response['Assam']['districtData']['Chirang']['recovered']],
            darrang: [response['Assam']['districtData']['Darrang']['confirmed']],
            darrangactive: [response['Assam']['districtData']['Darrang']['active']],
            darrangdeceased: [response['Assam']['districtData']['Darrang']['deceased']],
            darrangrecovered: [response['Assam']['districtData']['Darrang']['recovered']],
            dima: [response['Assam']['districtData']['Dima Hasao']['confirmed']],
            dimaactive: [response['Assam']['districtData']['Dima Hasao']['active']],
            dimadeceased: [response['Assam']['districtData']['Dima Hasao']['deceased']],
            dimarecovered: [response['Assam']['districtData']['Dima Hasao']['recovered']],
            dhubri: [response['Assam']['districtData']['Dhubri']['confirmed']],
            dhubriactive: [response['Assam']['districtData']['Dhubri']['active']],
            dhubrideceased: [response['Assam']['districtData']['Dhubri']['deceased']],
            dhubrirecovered: [response['Assam']['districtData']['Dhubri']['recovered']],
            dibrugarh: [response['Assam']['districtData']['Dibrugarh']['confirmed']],
            dibrugarhactive: [response['Assam']['districtData']['Dibrugarh']['active']],
            dibrugarhdeceased: [response['Assam']['districtData']['Dibrugarh']['deceased']],
            dibrugarhrecovered: [response['Assam']['districtData']['Dibrugarh']['recovered']],
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
            hojai: [response['Assam']['districtData']['Hojai']['confirmed']],
            hojaiactive: [response['Assam']['districtData']['Hojai']['active']],
            hojaideceased: [response['Assam']['districtData']['Hojai']['deceased']],
            hojairecovered: [response['Assam']['districtData']['Hojai']['recovered']],
            jorhat: [response['Assam']['districtData']['Jorhat']['confirmed']],
            jorhatactive: [response['Assam']['districtData']['Jorhat']['active']],
            jorhatdeceased: [response['Assam']['districtData']['Jorhat']['deceased']],
            jorhatrecovered: [response['Assam']['districtData']['Jorhat']['recovered']],
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
            karbianglong: [response['Assam']['districtData']['Karbi Anglong']['confirmed']],
            karbianglongactive: [response['Assam']['districtData']['Karbi Anglong']['active']],
            karbianglongdeceased: [response['Assam']['districtData']['Karbi Anglong']['deceased']],
            karbianglongrecovered: [response['Assam']['districtData']['Karbi Anglong']['recovered']],
            kokrajhar: [response['Assam']['districtData']['Kokrajhar']['confirmed']],
            kokrajharactive: [response['Assam']['districtData']['Kokrajhar']['active']],
            kokrajhardeceased: [response['Assam']['districtData']['Kokrajhar']['deceased']],
            kokrajharrecovered: [response['Assam']['districtData']['Kokrajhar']['recovered']],
            lakhimpur: [response['Assam']['districtData']['Lakhimpur']['confirmed']],
            lakhimpuractive: [response['Assam']['districtData']['Lakhimpur']['active']],
            lakhimpurdeceased: [response['Assam']['districtData']['Lakhimpur']['deceased']],
            lakhimpurrecovered: [response['Assam']['districtData']['Lakhimpur']['recovered']],
            morigaon: [response['Assam']['districtData']['Morigaon']['confirmed']],
            morigaonactive: [response['Assam']['districtData']['Morigaon']['active']],
            morigaondeceased: [response['Assam']['districtData']['Morigaon']['deceased']],
            morigaonrecovered: [response['Assam']['districtData']['Morigaon']['recovered']],
            nagaon: [response['Assam']['districtData']['Nagaon']['confirmed']],
            nagaonactive: [response['Assam']['districtData']['Nagaon']['active']],
            nagaondeceased: [response['Assam']['districtData']['Nagaon']['deceased']],
            nagaonrecovered: [response['Assam']['districtData']['Nagaon']['recovered']],
            nalbari: [response['Assam']['districtData']['Nalbari']['confirmed']],
            nalbariactive: [response['Assam']['districtData']['Nalbari']['active']],
            nalbarideceased: [response['Assam']['districtData']['Nalbari']['deceased']],
            nalbarirecovered: [response['Assam']['districtData']['Nalbari']['recovered']],
            salmara: [response['Assam']['districtData']['South Salmara Mankachar']['confirmed']],
            salmaraactive: [response['Assam']['districtData']['South Salmara Mankachar']['active']],
            salmaradeceased: [response['Assam']['districtData']['South Salmara Mankachar']['deceased']],
            salmararecovered: [response['Assam']['districtData']['South Salmara Mankachar']['recovered']],
            sivasagar: [response['Assam']['districtData']['Sivasagar']['confirmed']],
            sivasagaractive: [response['Assam']['districtData']['Sivasagar']['active']],
            sivasagardeceased: [response['Assam']['districtData']['Sivasagar']['deceased']],
            sivasagarrecovered: [response['Assam']['districtData']['Sivasagar']['recovered']],
            sonitpur: [response['Assam']['districtData']['Sonitpur']['confirmed']],
            sonitpuractive: [response['Assam']['districtData']['Sonitpur']['active']],
            sonitpurdeceased: [response['Assam']['districtData']['Sonitpur']['deceased']],
            sonitpurrecovered: [response['Assam']['districtData']['Sonitpur']['recovered']],
            tinsukia: [response['Assam']['districtData']['Tinsukia']['confirmed']],
            tinsukiaactive: [response['Assam']['districtData']['Tinsukia']['active']],
            tinsukiadeceased: [response['Assam']['districtData']['Tinsukia']['deceased']],
            tinsukiarecovered: [response['Assam']['districtData']['Tinsukia']['recovered']],
            udalguri: [response['Assam']['districtData']['Udalguri']['confirmed']],
            udalguriactive: [response['Assam']['districtData']['Udalguri']['active']],
            udalgurideceased: [response['Assam']['districtData']['Udalguri']['deceased']],
            udalgurirecovered: [response['Assam']['districtData']['Udalguri']['recovered']],
            westkarbi: [response['Assam']['districtData']['West Karbi Anglong']['confirmed']],
            westkarbiactive: [response['Assam']['districtData']['West Karbi Anglong']['active']],
            westkarbideceased: [response['Assam']['districtData']['West Karbi Anglong']['deceased']],
            westkarbirecovered: [response['Assam']['districtData']['West Karbi Anglong']['recovered']],
            unknownassam: [response['Assam']['districtData']['Other State']['confirmed']],
            unknownassamactive: [response['Assam']['districtData']['Other State']['active']],
            unknownassamdeceased: [response['Assam']['districtData']['Other State']['deceased']],
            unknownassamrecovered: [response['Assam']['districtData']['Other State']['recovered']],
            // barpeta: [response['Assam']['districtData']['Barpeta']['confirmed']],
            //Manipur
            chandel: [response['Manipur']['districtData']['Chandel']['confirmed']],
            chandelactive: [response['Manipur']['districtData']['Chandel']['active']],
            chandeldeceased: [response['Manipur']['districtData']['Chandel']['deceased']],
            chandelrecovered: [response['Manipur']['districtData']['Chandel']['recovered']],
            churachandpur: [response['Manipur']['districtData']['Churachandpur']['confirmed']],
            churachandpuractive: [response['Manipur']['districtData']['Churachandpur']['active']],
            churachandpurdeceased: [response['Manipur']['districtData']['Churachandpur']['deceased']],
            churachandpurrecovered: [response['Manipur']['districtData']['Churachandpur']['recovered']],
            imphaleast: [response['Manipur']['districtData']['Imphal East']['confirmed']],
            imphaleastactive: [response['Manipur']['districtData']['Imphal East']['active']],
            imphaleastdeceased: [response['Manipur']['districtData']['Imphal East']['deceased']],
            imphaleastrecovered: [response['Manipur']['districtData']['Imphal East']['recovered']],
            imphalwest: [response['Manipur']['districtData']['Imphal West']['confirmed']],
            imphalwestactive: [response['Manipur']['districtData']['Imphal West']['active']],
            imphalwestdeceased: [response['Manipur']['districtData']['Imphal West']['deceased']],
            imphalwestrecovered: [response['Manipur']['districtData']['Imphal West']['recovered']],
            noney: [response['Manipur']['districtData']['Noney']['confirmed']],
            noneyactive: [response['Manipur']['districtData']['Noney']['active']],
            noneydeceased: [response['Manipur']['districtData']['Noney']['deceased']],
            noneyrecovered: [response['Manipur']['districtData']['Noney']['recovered']],
            //Meghalaya
            eastkhasi: [response['Meghalaya']['districtData']['East Khasi Hills']['confirmed']],
            eastkhasiactive: [response['Meghalaya']['districtData']['East Khasi Hills']['active']],
            eastkhasideceased: [response['Meghalaya']['districtData']['East Khasi Hills']['deceased']],
            eastkhasirecovered: [response['Meghalaya']['districtData']['East Khasi Hills']['recovered']],
            northgaro: [response['Meghalaya']['districtData']['North Garo Hills']['confirmed']],
            northgaroactive: [response['Meghalaya']['districtData']['North Garo Hills']['active']],
            northgarodeceased: [response['Meghalaya']['districtData']['North Garo Hills']['deceased']],
            northgarorecovered: [response['Meghalaya']['districtData']['North Garo Hills']['recovered']],
            southwestgaro: [response['Meghalaya']['districtData']['South West Garo Hills']['confirmed']],
            southwestgaroactive: [response['Meghalaya']['districtData']['South West Garo Hills']['active']],
            southwestgarodeceased: [response['Meghalaya']['districtData']['South West Garo Hills']['deceased']],
            southwestgarorecovered: [response['Meghalaya']['districtData']['South West Garo Hills']['recovered']],
            westgaro: [response['Meghalaya']['districtData']['West Garo Hills']['confirmed']],
            westgaroactive: [response['Meghalaya']['districtData']['West Garo Hills']['active']],
            westgarodeceased: [response['Meghalaya']['districtData']['West Garo Hills']['deceased']],
            westgarorecovered: [response['Meghalaya']['districtData']['West Garo Hills']['recovered']],
            westkhasi: [response['Meghalaya']['districtData']['West Khasi Hills']['confirmed']],
            westkhasiactive: [response['Meghalaya']['districtData']['West Khasi Hills']['active']],
            westkhasideceased: [response['Meghalaya']['districtData']['West Khasi Hills']['deceased']],
            westkhasirecovered: [response['Meghalaya']['districtData']['West Khasi Hills']['recovered']],
            // unknown: [response['Meghalaya']['districtData']['Unknown']['confirmed']],
            // unknownactive: [response['Meghalaya']['districtData']['Unknown']['active']],
            // unknowndeceased: [response['Meghalaya']['districtData']['Unknown']['deceased']],
            // unknownrecovered: [response['Meghalaya']['districtData']['Unknown']['recovered']],
            //Mizoram
            aizawl: [response['Mizoram']['districtData']['Aizawl']['confirmed']],
            aizawlactive: [response['Mizoram']['districtData']['Aizawl']['active']],
            aizawldeceased: [response['Mizoram']['districtData']['Aizawl']['deceased']],
            aizawlrecovered: [response['Mizoram']['districtData']['Aizawl']['recovered']],
            // Nagaland
            dimapur: [response['Nagaland']['districtData']['Dimapur']['confirmed']],
            dimapuractive: [response['Nagaland']['districtData']['Dimapur']['active']],
            dimapurdeceased: [response['Nagaland']['districtData']['Dimapur']['deceased']],
            dimapurrecovered: [response['Nagaland']['districtData']['Dimapur']['recovered']],
            kohima: [response['Nagaland']['districtData']['Kohima']['confirmed']],
            kohimaactive: [response['Nagaland']['districtData']['Kohima']['active']],
            kohimadeceased: [response['Nagaland']['districtData']['Kohima']['deceased']],
            kohimarecovered: [response['Nagaland']['districtData']['Kohima']['recovered']],
            tuensang: [response['Nagaland']['districtData']['Tuensang']['confirmed']],
            tuensangactive: [response['Nagaland']['districtData']['Tuensang']['active']],
            tuensangdeceased: [response['Nagaland']['districtData']['Tuensang']['deceased']],
            tuensangrecovered: [response['Nagaland']['districtData']['Tuensang']['recovered']],
            //Sikkim
            southsikkim: [response['Sikkim']['districtData']['South Sikkim']['confirmed']],
            southsikkimactive: [response['Sikkim']['districtData']['South Sikkim']['active']],
            southsikkimdeceased: [response['Sikkim']['districtData']['South Sikkim']['deceased']],
            southsikkimrecovered: [response['Sikkim']['districtData']['South Sikkim']['recovered']],
            //Tripura
            dhalai: [response['Tripura']['districtData']['Dhalai']['confirmed']],
            dhalaiactive: [response['Tripura']['districtData']['Dhalai']['active']],
            dhalaideceased: [response['Tripura']['districtData']['Dhalai']['deceased']],
            dhalairecovered: [response['Tripura']['districtData']['Dhalai']['recovered']],
            gomati: [response['Tripura']['districtData']['Gomati']['confirmed']],
            gomatiactive: [response['Tripura']['districtData']['Gomati']['active']],
            gomatideceased: [response['Tripura']['districtData']['Gomati']['deceased']],
            gomatirecovered: [response['Tripura']['districtData']['Gomati']['recovered']],
            khowai: [response['Tripura']['districtData']['Khowai']['confirmed']],
            khowaiactive: [response['Tripura']['districtData']['Khowai']['active']],
            khowaideceased: [response['Tripura']['districtData']['Khowai']['deceased']],
            khowairecovered: [response['Tripura']['districtData']['Khowai']['recovered']],
            northtripura: [response['Tripura']['districtData']['North Tripura']['confirmed']],
            northtripuraactive: [response['Tripura']['districtData']['North Tripura']['active']],
            northtripuradeceased: [response['Tripura']['districtData']['North Tripura']['deceased']],
            northtripurarecovered: [response['Tripura']['districtData']['North Tripura']['recovered']],
            sipahijala: [response['Tripura']['districtData']['Sipahijala']['confirmed']],
            sipahijalaactive: [response['Tripura']['districtData']['Sipahijala']['active']],
            sipahijaladeceased: [response['Tripura']['districtData']['Sipahijala']['deceased']],
            sipahijalarecovered: [response['Tripura']['districtData']['Sipahijala']['recovered']],
            southtripura: [response['Tripura']['districtData']['South Tripura']['confirmed']],
            southtripuraactive: [response['Tripura']['districtData']['South Tripura']['active']],
            southtripuradeceased: [response['Tripura']['districtData']['South Tripura']['deceased']],
            southtripurarecovered: [response['Tripura']['districtData']['South Tripura']['recovered']],
            unokoti: [response['Tripura']['districtData']['Unokoti']['confirmed']],
            unokotiactive: [response['Tripura']['districtData']['Unokoti']['active']],
            unokotideceased: [response['Tripura']['districtData']['Unokoti']['deceased']],
            unokotirecovered: [response['Tripura']['districtData']['Unokoti']['recovered']],
            westtripura: [response['Tripura']['districtData']['West Tripura']['confirmed']],
            westtripuraactive: [response['Tripura']['districtData']['West Tripura']['active']],
            westtripuradeceased: [response['Tripura']['districtData']['West Tripura']['deceased']],
            westtripurarecovered: [response['Tripura']['districtData']['West Tripura']['recovered']],
        }
        return modifiedData
    } catch (error) {

    }
}


/*
    - Gå gjennom skjermbilde for skjermbilde

       - commands - hva kan vi gjøre på dette skjermbildet - og 
         hvordan skal vi lagre at dette er gjort i modellen?

       - queries - hvilke data skal vises i dette skjermbildet - og 
         hvordan skal de lagres i modellen

       - input felt

*/


const model = {
    app: {
        currentPage: 'writelog', // addOption
    },
    inputs: {
        loggInputPage: {
            general: {
                Dykkdato: '',
                Dykkerselskap: '',
                adresse: '',
                Telefon: '',
                Vessel: '',
                Operator: '',
            typedive: {
                overflate: '',
                Wetbell: '',
                bellsat: '',
                SurDo2: '',
                Bellbounce: '',
                Breathingmix: '',
                Other:'',
            },
            surfacedies: {
                Leftsurface: '',
                maxdepth: '',
                leftbottom: '',
                bottomtime: '',
                leftlaststop: '',
                tabledepth: '',
                tabletime: '',
                chambertime: '',
                Decompressionscedule: '',
            },
            saturationdive: {
                leftsurface: '',
                maxdepthsaturation: '',
                leftstoragedepth: '',
                Backtostoragedepth: '',
                saturationbottomtime: '',
            },
            Equipment: {
                airstandard: '',
                mask: '',
                helmet: '',
            },
            description: {
                workdescription: '',
                remarks: '',
                standbydiver: '',
            },
            sign: {
                Supervisor: '',
                signsupervisor: '',
                Signdate: '',
                stamp:'',
            },
            }
        },
        loggDisplayPage: {
            sortBy: 'default',
        },
    },
    loggDisplayPage: {
        diveLog: [
            {
                id: 000001,
                date: '24.04.20',
                airstandard: 'nitrox',
                maxdepth: '35m',
                bottomtime: '10min',
                supervisor: 'Emil',
                Stamp: true,
            },
            {
                id: 000002,
                date: '',
                airstandard: '',
                maxdepth: '',
                bottomtime: '',
                supervisor: '',
                Stamp: '',
            },
            {
                id: 000003,
                date: '',
                airstandard: '',
                maxdepth: '',
                bottomtime: '',
                supervisor: '',
                Stamp: '',
            },
            {
                id: 000004,
                date: '',
                airstandard: '',
                maxdepth: '',
                bottomtime: '',
                supervisor: '',
                Stamp: '',
            },
            {
                id: 000005,
                date: '',
                airstandard: '',
                maxdepth: '',
                bottomtime: '',
                supervisor: '',
                Stamp: '',
            },
            {
                id: 000006,
                date: '',
                airstandard: '',
                maxdepth: '',
                bottomtime: '',
                supervisor: '',
                Stamp: '',
            },
        ]
    },
    sortByCategories: [
        {id: 1, name:'dato', },
        {id: 2, name:'Signed', },
        {id: 3, name:'breathing mixture', },
        {id: 4, name:'decompression scedule used', },
        {id: 5, name:'supervisor', },
        {id: 6, name:'stand by diver', },
    ],
    completedLogDisplay: 
        {
            general: {
                Dykkdato: '',
                Dykkerselskap: '',
                adresse: '',
                Telefon: '',
                Vessel: '',
                Operator: '',
            typedive: {
                overflate: '',
                Wetbell: '',
                bellsat: '',
                SurDo2: '',
                Bellbounce: '',
                Breathingmix: '',
                Other:'',
            },
            surfacedies: {
                Leftsurface: '',
                maxdepth: '',
                leftbottom: '',
                bottomtime: '',
                leftlaststop: '',
                tabledepth: '',
                tabletime: '',
                chambertime: '',
                Decompressionscedule: '',
            },
            saturationdive: {
                leftsurface: '',
                maxdepthsaturation: '',
                leftstoragedepth: '',
                Backtostoragedepth: '',
                saturationbottomtime: '',
            },
            Equipment: {
                airstandard: '',
                mask: '',
                helmet: '',
            },
            description: {
                workdescription: '',
                remarks: '',
                standbydiver: '',
            },
            sign: {
                Supervisor: '',
                signsupervisor: '',
                Signdate: '',
                stamp:'',
            },
            },
        },
};
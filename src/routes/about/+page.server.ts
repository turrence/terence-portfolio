import type { PageServerLoad } from './$types';

import axios from 'axios';
import Papa from 'papaparse';

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSg9Wzt4quSMZUsw-IJbeFuX0lTuUMo9x-657KUue8Zi5kBZA5pWAEFvkoP8_64O8DUgciu9fXVBTYb/pub?gid=0&single=true&output=csv';

export const load = (async() => {
    let ret: any = {};
    await axios.get(url).then(
        (data) => {
            Papa.parse(data.data, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                    ret = result;
                }
            });
        }
    )
    return {
        data: ret.data
    }; 
}) satisfies PageServerLoad;
import axios from 'axios';
import { LANGUAGE_VERSIONS } from '../frontend/src/Components/constants'

const API = axios.create({
    baseURL : "https://emkc.org/api/v2/piston"
})

export const executeCode = async(language, sourceCode) => {
    const response = await API.post("/execute", {
        "language": language,
        "version":  LANGUAGE_VERSIONS[language],
        files: [
            {
                content: sourceCode,
            },
        ],
    });
    console.log(response)
    return response.data.run.output;
};
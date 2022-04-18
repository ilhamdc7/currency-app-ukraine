import axios from "axios";

const currencyOneUrl = 'https://api.fastforex.io/fetch-multi?from=UAH&to=USD&api_key=00ce463218-c9ab8847ab-rahxn6'
export const getCurrency = async() => {
    return(
        await axios.get(currencyOneUrl)
    )
}

export const backgroundImg = "https://www.aljazeera.com/wp-content/uploads/2022/02/2021-12-16T132004Z_1871629321_RC2KFR932GEC_RTRMADP_3_UKRAINE-CITYSCAPE.jpg?resize=770%2C513"
export const containerBackground = "https://cdn.pixabay.com/photo/2022/02/28/14/16/heart-7039299_1280.png"



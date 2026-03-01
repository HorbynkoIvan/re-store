import axios from "axios";
import {setError, setLoading, setQuotes, setRandomQuote} from "@redux/reducers/qoutesSlice";

const fetchQuotesFromAPI = async () => {
    const response = await axios.get(QUOTES_URL);
    return response.data;
};

export const fetchQuotes = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const quotes = await fetchQuotesFromAPI();
        dispatch(setQuotes(quotes));
        dispatch(setRandomQuote());
        dispatch(setLoading(false));
    } catch (error) {
        console.error('Error fetching quotes:', error);
        dispatch(setError(error));
        dispatch(setQuotes([]));
        dispatch(setLoading(false));
    }
};

export const getContrastText = (bgColor) => {
    const hexToRgb = (hex) => {
        let bigint = parseInt(hex.slice(1), 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return {r, g, b};
    };

    const {r, g, b} = hexToRgb(bgColor);

    // Calculate brightness
    const brightness = (0.299 * r + 0.587 * g + 0.114 * b);

    // Return white for dark backgrounds, black for light backgrounds
    return brightness > 128 ? '#000000' : '#ffffff';
};

export const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
}

function inIframe() {
    try {
        return window.self !== window.top;
    } catch {
        return true;
    }
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

// Construct social media share URLs
const createTweetURL = (quote, author) => `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${quote}" ${author}`)}`;

const createTumblrURL = (quote, author) => `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(author)}&content=${encodeURIComponent(quote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

// Share quote on Twitter
export const tweetQuote = (quote, author) => {
    if (!inIframe()) {
        openURL(createTweetURL(quote, author));
    }
};

// Share quote on Tumblr
export const tumblrQuote = (quote, author) => {
    if (!inIframe()) {
        openURL(createTumblrURL(quote, author));
    }
};
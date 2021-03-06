import React, { useState, useEffect } from "react";

const Weather = ({description, city, country, error, temperature}) => {

 

    function matchValues() {
        if (description) {
            const weatherDescription = description.split(' ')
            const clouds = ["cloudy", "clouds", "overcast", "cloud"]
            const sun = ["clear", "sunny", "sun"]
            const rain = ["rain", "showers", "thunder", "lightning"]
            for (let i = 0; i < weatherDescription.length; i++) {
                if (clouds.includes(weatherDescription[i])) {
                    return <img src="https://elements-video-cover-images-0.imgix.net/files/d19a17b4-4e27-4715-9fca-7ddc325f3178/inline_image_preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=0f6d249f8597b36116b4ede9420adb4e"/>
                } else if (sun.includes(weatherDescription[i])) {
                    return <img src="https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/325/325918/sun-in-the-sky.jpg?w=1155&h=1541" />
                } else if (rain.includes(weatherDescription[i])) {
                    return <img src="data:image/jpeg;base64,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" />
                }
            }
        }
    }

    return (
        <div>
            <div classname="img">{matchValues()}</div>
            <div classname="facts">
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature}  °C</p>}
            {description && <p> Conditions: {description}</p>}
            {error && <p>{error}</p>}
            {description && matchValues()}
            </div>
        </div>
    )
}

export default Weather;


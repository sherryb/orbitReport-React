function SatelliteImage() {
    const url = "https://www.methanesat.org/_app/immutable/assets/Satellite-91ce2e3c.webp"
    return (
        <div className="sat-image">
            <img src={url} alt="image of a satellite"></img>
        </div>
    )
}

export default SatelliteImage;
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1> {props.promoData.heading} <span className="name">{props.promoData.name}</span>!</h1>
                <h2> {props.promoData.callToAction} {props.promoData.promo}</h2>
            </div>
        </div>
    )
}

export default Promo;
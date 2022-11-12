import Carousel from "./Carousel"

const App2 = () => {
    return (
        <div style={{ maxWidth: 120, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carousel
                show={3}
                infiniteLoop
            >
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/410UOtOGvsL._AC_SY200_.jpg" alt="placeholder" style={{width: '55%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/310oMFhuDqL._AC_SY200_.jpg" alt="placeholder" style={{width: '67%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/214Ck7MfbRL._AC_SY200_.jpg" alt="placeholder" style={{width: '80%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/31G1NouVxaL._AC_SY200_.jpg" alt="placeholder" style={{width: '85%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/I/61RDQaMgaJL._AC_SY200_.png" alt="placeholder" style={{width: '57%'}} />
                    </div>
                </div>

                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41kLq+iVPHL._AC_SY200_.jpg" alt="placeholder" style={{width: '45%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/512sIbfImCL._AC_SY200_.jpg" alt="placeholder" style={{width: '70%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/21Y3xVnL0BL._AC_SY200_.jpg" alt="placeholder" style={{width: '46%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/I/61RDQaMgaJL._AC_SY200_.png" alt="placeholder" style={{width: '57%'}} />
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default App2
import * as React from 'react';
import { Nav } from '../components/Nav';
import { Tabs } from '../utils/Helper'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { Busy } from '../components/Busy';
import { Footer } from '../components/Footer';

// const googleMapURL = 'https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyDH_aHRsVOr_CMITd6m0Vuo1X2qSXMicdY'

const GoogleMapsWrapper = withGoogleMap((props: any) => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={17}
        defaultCenter={{ lat: 50.446102, lng: 30.425567 }}
        onClick={props.onMapClick}
    >
        <Marker
            title={'ONI'}
            label={'O'}
            position={{ lat: 50.446102, lng: 30.425567 }}
        />
    </GoogleMap>
));

interface IDeliveryAndPaymentState {
    loading?: any;
    height?: string;
}

export class DeliveryAndPayment extends React.Component<any, IDeliveryAndPaymentState>{
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            height: '0px'
        }
    }

    onImageLoaded = () => {
        this.setState({
            loading: false,
            height: 'auto'
        });
    }

    render() {
        const { loading, height } = this.state;

        return <div className='contacts-container'>
            <Nav tab={Tabs.DeliveryAndPayment} />
            <div className='contacts-header'>
                <div className='contacts-photo' style={{ height: height }} >
                    <img src='./images/images_large/contacts/contacts_header.jpg' onLoad={this.onImageLoaded} />
                </div>
                <div className='header-text'>
                    <div className='header-main'>ДОСТАВКА И ОПЛАТА</div>
                    <div className='header-body'>
                        Наш кондитерский цех находится в г.Киев по адресу бульвар Вацлава Гавела, 9А (бывший бульвар Ивана Лепсе). Вы можете забрать свой заказ самостоятельно или заказать доставку курьером по Киеву. Стоимость доставки составляет 70 грн. Минимальная сумма заказа для доставки – 200 грн. Доставка в другие города Украины обсуждается индивидуально.
                        <br />
                        <br />
                        При условии наличия желаемых изделий возможна доставка в день заказа. Все детали Вы можете уточнить по тел.+380962490430 или написав нам на почту info@oni.ua.
                        <br />
                        <br />
                        Оплата осуществляется наличными при получении или на карту ПриватБанк. Предоплата необходима только для индивидуальных и корпоративных заказов.
                        </div>
                </div>
            </div>
            <div className='contacts-body'>
                <div className='contacts-body-map'>
                    <GoogleMapsWrapper
                        containerElement={
                            <div style={{ height: `100%` }} />
                        }
                        mapElement={
                            <div style={{ height: `100%` }} />
                        }
                        onMapLoad={() => { }}
                        onMapClick={() => { }}
                        onMarkerRightClick={() => { }}
                    />
                </div>
            </div>
            <Footer />
            <Busy loading={loading} />
        </div>;
    }
};
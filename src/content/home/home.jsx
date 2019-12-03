import React, {Component,Fragment} from 'react';

class home extends Component {
    render() {
        return (
            <Fragment className="contenthome">
                <div className="slider">
                    <div className="slidercontent">
                        <img className="imageslide" src={require('../../images/banner-desktop.jpg')}/>
                    </div>
                </div>
                {/*slider*/}
                <h2 className="dataprestasi">Prestasi Babastudio</h2>
                <div className="content">

                    <div className="content-gambar">
                        <div className="image">
                            <img className="imagesliderr" src={require('../../images/21cineplex.jpg')}/>
                            <div className="contentimage">
                            <h2 className="fontimage">www.21cineplex.com</h2>
                            </div>
                        </div>
                        <div className="image">
                            <img className="imagesliderr" src={require('../../images/bpn.jpg')}/>
                            <div className="contentimage">
                            <h2 className="fontimage">www.bpn.go.id</h2>
                            </div>
                        </div>
                        <div className="image">
                            <img className="imagesliderr" src={require('../../images/republika.jpg')}/>
                            <div className="contentimage">
                            <h2 className="fontimage">www.republika.co.id</h2>
                            </div>
                        </div>
                        </div>
                        {/*end content-gambar*/}
                        <div className="content-gambar">
                        <h2 className="dataprestasi">Tempat Kursus Babastudio</h2>
                        <div className="content-youtube">
                        <iframe width="600" height="315" src="https://www.youtube.com/embed/k1OWLK0Yhc8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="content-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3252610688915!2d106.78088231413749!3d-6.220770662657778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6cd0000003d%3A0x1f5fa010fece9b0b!2sKampus%20Babastudio%20Permata%20Hijau!5e0!3m2!1sen!2sid!4v1574313909159!5m2!1sen!2sid" width="600" height="316" frameborder="0" allowfullscreen=""></iframe>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
        export default home;
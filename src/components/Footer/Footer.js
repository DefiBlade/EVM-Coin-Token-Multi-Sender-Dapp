import React, { Component } from 'react';
import logo from './1200.png'
import telegram from './telegram.png'
import twitter from './twitter.png'
import email from './email.png'
import md from './md.png'
import insta from './insta.png'
import face from './face.png'
const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-2/footer";

class Footer extends Component {
    state = {
        data: {},
        socialData: [],
        widgetData_1: [],
        widgetData_2: []
    }
    
    render() {
        return (
            <footer className="footer-area">
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 mb-5">
                                {/* Footer Items */}
                                <div className="footer-items" style={{display:'flex',justifyContent:'center'}}>
                                    {/* Logo */}
                                    <a className="navbar-brand" href="/">
                                        <img src={logo} alt="" className="footer-logo" style={{width:'100px'}}/>
                                    </a>
                                    {/* <p>{this.state.data.content}</p> */}
                                    {/* Social Icons */}
                                    {/* <div className="social-icons d-flex">
                                        {this.state.socialData.map((item, idx) => {
                                            return (
                                                <a key={`sd_${idx}`} className={item.link} href="#">
                                                    <i className={item.icon} />
                                                    <i className={item.icon} />
                                                </a>
                                            );
                                        })}
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-12 col-sm-6  res-margin">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    <h4 className="footer-title text-center " >Community</h4>
                                    
                                    <ul style={{display:'flex',justifyContent:"center"}}>
                                    <li > <a href="https://twitter.com/CSDOGE2"><img src={twitter} style={{width:'50px',margin:'0 20px',height:'50px',borderRadius:'6px',padding:'5px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className="img-fluid"/> </a></li>
                                    <li > <a href="https://t.me/csdogechat"><img src={telegram} style={{width:'50px',margin:'0 20px',height:'50px',borderRadius:'6px',padding:'5px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className="img-fluid"/> </a></li>
                                    <li > <a href="https://t.me/CSDOGE_DISCUTION_CHAT"><img src={telegram} style={{width:'50px',margin:'0 20px',height:'50px',borderRadius:'6px',padding:'5px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className="img-fluid"/> </a></li>
                                       
                                    </ul>
                                    <ul style={{display:'flex',justifyContent:'center'}}>
                                 
                                    <li ><a href="https://medium.com/@caucasianshepherddoge"><img src={md} style={{width:'50px',margin:'0 20px',height:'50px',borderRadius:'6px',padding:'5px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className="img-fluid"/> </a></li>
                                    <li ><a href="https://www.instagram.com/csdoge2021/"><img src={insta} style={{width:'50px',margin:'0 20px',height:'50px',borderRadius:'6px',padding:'5px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className="img-fluid"/> </a></li>
                                    <li ><a href="https://www.youtube.com/channel/UCZwrr_sL-ho8_EAGW9Ked4Q"><img src={face} style={{width:'50px',margin:'0 20px',height:'50px',borderRadius:'6px',padding:'5px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className="img-fluid"/> </a></li>
                                       
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 res-margin">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    {/* <h4 className="footer-title">{this.state.data.widget_2}</h4> */}
                                    {/* <ul>
                                        {this.state.widgetData_2.map((item, idx) => {
                                            return (
                                                <li key={`wdo_${idx}`}><a href="#">{item.text}</a></li>
                                            );
                                        })}
                                    </ul> */}
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    {/* <h4 className="footer-title">{this.state.data.widget_3}</h4> */}
                                    {/* Subscribe Form */}
                                    {/* <div className="subscribe-form d-flex align-items-center">
                                        <input type="email" className="form-control" placeholder="info@yourmail.com" />
                                        <button type="submit" className="btn"><i className="icon-paper-plane" /></button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Copyright Area */}
                                
                                <div className="copyright-area d-flex flex-wrap justify-content-center  text-center py-4">
                                    {/* Copyright Left */}
                                    
                                    <div className="copyright-left">Copyright ©2021.All Rights Reserved By CSDOGE.</div>
                                    {/* Copyright Right */}
                                    {/* <div className="copyright-right">Made with <i className="fas fa-heart" /> By <a href="#">Themeland</a></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
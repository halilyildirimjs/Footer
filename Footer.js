import { useTranslation } from 'react-i18next'
import React,{useState} from 'react'
import appstore from '../Assets/Image/appstore.png'
import googleplay from '../Assets/Image/googleplay.png'
import logo from '../Assets/Image/Navbar/logo.png'
import { Button, Grid, Typography } from '@material-ui/core'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {makeStyles} from '@material-ui/core/styles'
import Dialog from '../../Components/Dialog/Dialog'
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} 
from "../../Pages/Footer/footerstyle";
const Footer = () => {
const open = () =>{
	setOpenDialog(true);
}
const close = () =>{
	setOpenDialog(false);
}
const [openDialog,setOpenDialog] = useState(false);
const { t, i18n } = useTranslation();

return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading ><img style={{width:"25px"},{height:"25px"}} src={logo} alt=""/> {t('Lingush.1')} </Heading>
			<FooterLink><Grid container item xs={5} md={10} className="bt1" justify="center" alignItems="center">
                                <Grid item><img style={{ width: "15.83px", height: "15.83px", marginRight: "5px" }} src={appstore} alt="" /></Grid>
                                <Grid item style={{ textAlign: "center", marginTop: "-2px" }}><a href='https://apps.apple.com/tr/app/lingush/id1553733072?l=tr' 
								style={{ textDecoration: 'none', color: 'black' }}>App Store</a></Grid>
                            </Grid>
							</FooterLink>
							<FooterLink>
			<Grid container item xs={5} md={10} className="bt1" justify="center" alignItems="center">
                                <Grid item><img style={{ width: "15.27px", height: "15.27px", marginRight: "5px" }} src={googleplay} alt="" /></Grid>
                                <Grid item style={{ textAlign: "center", marginTop: "-2px" }}><a href='http://onelink.to/d3as6b' 
								style={{ textDecoration: 'none', color: 'black' }}>Play Store</a></Grid>
                            </Grid>
							</FooterLink>
		</Column>
		<Column>
			<Heading> {t('Footer.3')}</Heading>
			<FooterLink href="#main_title">{t('Footer.4')}</FooterLink>
			<FooterLink href="#whylin">{t('Footer.5')}</FooterLink>
			<FooterLink href="#lingush_app">{t('Footer.6')}</FooterLink>
			<FooterLink href="#buy">{t('Footer.7')}</FooterLink>
		</Column>
		<Column>
			<Heading>{t('Footer.11')}</Heading>
			<FooterLink href="../../about_us">{t('Footer.9')}</FooterLink>
			<FooterLink href="../../about_us">{t('Footer.10')}</FooterLink>
			<FooterLink href="#text-buttons" onClick={open}>{t('Contact.1')}</FooterLink>
		</Column>
		<Column>
			<Heading>{t('Footer.13')}</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				{t('Footer.14')}
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				{t('Footer.15')}
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				{t('Footer.16')}
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-linkedin">
				<span style={{ marginLeft: "10px" }}>
				{t('Footer.17')}
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
		<Grid> <hr/></Grid>
		<Grid container item justify="center">© Copyright MyDosTech. All Rights Reserved</Grid>
		<Grid container item justify="center">Designed by MydosTechnology</Grid>	
		<Grid container item justify="center">Powered by Halil Yıldırım</Grid>	
		<Dialog open={openDialog} handleClose={close}/>
	</Container>
	</Box>	
);
};
export default Footer;
/*
<p style={{
		
		color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		{t('Footer.16')}
	</p>
	*/
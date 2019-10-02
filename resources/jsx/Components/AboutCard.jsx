import React from 'react'
import { Card, CardActions, IconButton, CardHeader, Avatar, Divider } from "@material-ui/core";
import Message from '@material-ui/icons/MessageOutlined';
import GithubIcon from './Icons/GithubIcon'
import TwitterIcon from './Icons/TwitterIcon'
import LinkedInIcon from './Icons/LinkedInIcon'
import InstagramIcon from './Icons/InstagramIcon'
export default function AboutCard() {
    return (
        <Card className="paper">
        <CardHeader
            avatar={
                <Avatar src={"/img/user.png"}/>
            }
            title={`Nikan Dalvand`}
            subheader={"Fullstack web developer"}
        />
        <Divider/>
        <CardActions className="flex justify-center">
            <IconButton onClick={()=> fox.openURL(fox.lang.owner.email)}>
                <Message/>
            </IconButton>
            <IconButton onClick={()=> fox.openURL(fox.lang.owner.instagram)}>
                <InstagramIcon/>
            </IconButton>
            <IconButton onClick={()=> fox.openURL(fox.lang.owner.github)}>
                <GithubIcon/>
            </IconButton>
            <IconButton onClick={()=> fox.openURL(fox.lang.owner.twitter)}>
                <TwitterIcon/>
            </IconButton>
            <IconButton onClick={()=> fox.openURL(fox.lang.owner.linkedin)}>
                <LinkedInIcon/>
            </IconButton>
        </CardActions>
        </Card>
    )
}
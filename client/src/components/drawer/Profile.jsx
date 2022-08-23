import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Box, styled, Typography } from '@mui/material'

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
    `

const Image = styled('img') ({
    width: 200,
    height: 200,
    borderRadius:'50%',
    padding: '25px 0'

})

const BoxWrapper = styled(Box)`
    background: #fff;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0 0.08);
    & :first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    }
    & :last-child {
        margin: 14px 0,
        color: #4A4A4A;
    }
    `

const Profile = () => {

    const { account } = useContext(AccountContext);
  return (
    <>
        <ImageContainer>
            <Image src={account.picture} alt="dp" />
        </ImageContainer>
        <BoxWrapper>
            <Typography>Your Name</Typography>
            <Typography>{account.name}</Typography>
        </BoxWrapper>
        <Box>
            <Typography>This is not your Username or pin This name will be visible to WhatsApp contacts</Typography>
        </Box>
        <Box></Box>
    
    </>
  )
}

export default Profile
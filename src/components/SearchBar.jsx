import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const SearchBar = () => {
    return (

        <Paper component='form'
            onSubmit={() => { }}
            sx={{ borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 } }}>

            <input className='search-bar' placeholder='Search...' value='' onChange={() => { }} />

            <IconButton type="submit" sx={{ p: '10px', color: 'black' }} >
                <SearchIcon />
                {/* <KeyboardVoiceIcon /> */}
            </IconButton>

        </Paper>
    )
}

export default SearchBar
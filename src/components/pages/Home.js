import * as React from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import LaunchIcon from '@mui/icons-material/Launch';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DefaultLayout from "../layout/DefaultLayout";
import Me from '../images/Me.jpg'
import './Home.css'

const links = [
  { name: 'LinkedIn', path: 'https://www.linkedin.com/in/samueljenkin/' },
  { name: 'GitHub', path: 'https://github.com/samueljenkin' },
  { name: 'Resume', path: '/portfolio' }
];

const Home = () => {
  const openLink = path => window.open(path, '_blank')

  return (
    <DefaultLayout>
      <div className="container">
        <section className="title">
          <h1>Sam Jenkin</h1>
          <h2>Full Stack Software Engineer</h2>
        </section>

        <section className="image">
          <img src={Me} alt="Sam Jenkin" />
        </section>

        <section className="links">
          {links.map(link => 
            <Button
              key={link.name}
              variant="contained"
              endIcon={<LaunchIcon />}
              onClick={() => openLink(link.path)}
            >
              {link.name}
            </Button>
          )}
        </section>

        <section className="contact">
          <Button
            variant="contained"
            component={Link}
            to='/contact'
          >
            Get in touch!
          </Button>
        </section>
      </div>
    </DefaultLayout>
  )
}

export default Home
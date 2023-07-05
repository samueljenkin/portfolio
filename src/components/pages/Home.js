import * as React from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import LaunchIcon from '@mui/icons-material/Launch';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DefaultLayout from "../layout/DefaultLayout";
import headshot from '../../images/me/headshot.jpg'
import './Home.css'

const links = [
  { name: 'LinkedIn', path: 'https://www.linkedin.com/in/samueljenkin/' },
  { name: 'GitHub', path: 'https://github.com/samueljenkin' },
  { name: 'Resume', path: 'https://drive.google.com/file/d/1wjqQnmJhJuEjWnP36v38MJYWh3wQJ7r1/view?usp=sharing' }
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

        <section className="me">
          <img src={headshot} alt="Sam Jenkin" />
        </section>

        <section className="links">
          {links.map(link => 
            <Button
              key={link.name}
              variant="contained"
              endIcon={<LaunchIcon />}
              onClick={() => openLink(link.path)}
              sx={{ backgroundColor: '#156064' }}
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
            sx={{ backgroundColor: '#156064' }}
          >
            Get in touch!
          </Button>
        </section>
      </div>
    </DefaultLayout>
  )
}

export default Home
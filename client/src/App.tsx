import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap'
import { Form, Button } from 'reactstrap'
import OldPostTile from './components/OldPostTile'

import { IJournal } from './types';

import { useSelector, useDispatch } from 'react-redux'


import { addNewJournal } from './store/actionCreators/journal'
import CheckIfUpdated from './components/CheckIfUpdated';
function App() {
  const [journal, setJournal] = useState('This is where yo put the journal')
  const journalList = useSelector((state: any) => state.journal.journalList)
  const currentDate = new Date();
  const [activePrevious, setActivePrevious] = useState({ _id: '', date: '', heading: '', text: '' })
  const [heading, setHeading] = useState('')
  const dispatch = useDispatch()

  const updateJournal = (e: any) => {
    e.preventDefault();
    const updatedText = e.target.value;
    setJournal(updatedText)
  }

  const setCurrentJournal = (id: number) => {
    // Do some logic to update the current journal
    const active = journalList.filter((journal: any) => {
      return journal._id === id
    })
    console.log(active[0])
    setActivePrevious(active[0])
  }

  const postNewJournal = () => {
    console.log(`Adding new journanl`)
    // Build new journal Object
    const newJourn = {
      date: currentDate,
      heading: heading,
      text: journal
    }
    console.log(newJourn)

    // Dispatch Addding new journal
    dispatch(addNewJournal(newJourn))
  }

  const sortedJournals = journalList.sort((a: any, b: any) => {
    return a.date <= b.date
  })


  return (
    <Container>
      <Row>
        <Col style={{ textAlign: 'center' }}>
          <h1>Simple Journal App</h1>
        </Col>
      </Row>
      <Row>
        <Col id="old-journal-entries">
          This is where old posts go.
          {
            sortedJournals.map((journal: IJournal) => {
              return (
                <div key={journal._id}>
                  <OldPostTile
                    _id={journal._id}
                    date={journal.date}
                    heading={journal.heading}
                    text={journal.text}
                    onClick={() => setCurrentJournal(journal._id)}
                  />
                </div>
              )
            })
          }


        </Col>
        <Col id="new-journal-entry">
          <div id="journalside">
            <Form>
              <h3>{currentDate.toDateString()}</h3>
              <input style={{ width: '100%' }} name="heading" value={heading} onChange={(e) => setHeading(e.target.value)} placeholder="leave blank to title this with the date" />
              <textarea value={journal} onChange={(e) => updateJournal(e)} id="journal-text-area"></textarea>
              <Button
                onClick={() => postNewJournal()}
              >Save New Journal</Button>
            </Form>
            <CheckIfUpdated />
          </div>
        </Col>
      </Row>
      <Row style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Previous Entry</h3><br></br>
        <div>
          {activePrevious.date.toString()}
        </div>
        <div>
          {activePrevious.heading.toString()}
        </div>
        <div>
          {activePrevious.text.toString()}
        </div>
      </Row>
    </Container>
  );
}

export default App;

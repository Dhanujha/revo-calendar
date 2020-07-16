import React, { Fragment, useState } from 'react'
import './App.css'
import { ChromePicker } from 'react-color'
import GitHubButton from 'react-github-btn'
import RevoCalendar from 'revo-calendar'
import 'revo-calendar/dist/index.css'

function App() {
  const [eventList, setEvents] = useState([])

  const [displayColorPicker, setDisplayColorPicker] = useState(0)

  const [highlightToday, setHighlightToday] = useState(true)
  const [lang, setLang] = useState('en')
  const [primaryColor, setPrimaryColor] = useState('#4F6995')
  const [secondaryColor, setSecondaryColor] = useState('#D7E6EE')
  const [todayColor, setTodayColor] = useState('#3B3966')
  const [textColor, setTextColor] = useState('#333333')
  const [animationSpeed, setAnimationSpeed] = useState(300)
  const [sidebarWidth, setSidebarWidth] = useState(180)
  const [detailWidth, setDetailWidth] = useState(280)
  const [showDetailToggler, setShowDetailToggler] = useState(true)
  const [showSidebarToggler, setShowSidebarToggler] = useState(true)
  const [onePanelAtATime, setOnePanelAtATime] = useState(false)
  const [allowDeleteEvent, setAllowDeleteEvent] = useState(true)
  const [openDetailsOnDateSelection, setOpenDetailsOnDateSelection] = useState(
    true
  )
  const [timeFormat24, setTimeFormat24] = useState(true)
  const [detailDateFormat, setDetailDateFormat] = useState('DD/MM/YYYY')

  return (
    <Fragment>
      <header>
        <div className='header'>
          <h1>RevoCalendar</h1>
          <ul>
            <li>
              <a href='#gettingStarted'>Getting Started</a>
            </li>
            <li>
              <a href='#example'>Live Example</a>
            </li>
            <li>
              <a
                href='https://gjmolter.com'
                target='_blank'
                rel='noreferrer noopener'
              >
                Author
              </a>
            </li>
            <li>
              <GitHubButton
                href='https://github.com/gjmolter/revo-calendar'
                data-size='large'
                data-show-count='true'
                aria-label='Star gjmolter/revo-calendar on GitHub'
              >
                Star
              </GitHubButton>
            </li>
          </ul>
        </div>
      </header>
      <div className='container'>
        <h2 id='gettingStarted'>Getting Started</h2>
        <p>First, install revo-calendar package using NPM or Yarn</p>
        <div className='code'>
          <code>
            <pre>$ npm i revo-calendar</pre>
            <pre className='comment'># or</pre>
            <pre>$ yarn add revo-calendar</pre>
          </code>
        </div>
        <p>Then, import the component and the CSS file</p>
        <div className='code'>
          <code>
            <pre>
              <span className='codePink'>import</span> RevoCalendar{' '}
              <span className='codePink'>from</span>{' '}
              <span className='codeYellow'>'revo-calendar'</span>
            </pre>
            <pre>
              <span className='codePink'>import </span>
              <span className='codeYellow'>'revo-calendar/dist/index.css'</span>
            </pre>
          </code>
        </div>

        <h2 id='example'>Live Example</h2>
        <div className='demo'>
          <RevoCalendar
            style={{
              borderRadius: '5px',
              border: '5px solid var(--primaryColor)'
            }}
            date={new Date()}
            deleteEvent={(index) => {
              console.log(index)
            }}
            highlightToday={highlightToday}
            lang={lang}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            todayColor={todayColor}
            textColor={textColor}
            animationSpeed={animationSpeed}
            sidebarWidth={sidebarWidth}
            detailWidth={detailWidth}
            showDetailToggler={showDetailToggler}
            showSidebarToggler={showSidebarToggler}
            onePanelAtATime={onePanelAtATime}
            allowDeleteEvent={allowDeleteEvent}
            openDetailsOnDateSelection={openDetailsOnDateSelection}
            timeFormat24={timeFormat24}
            detailDateFormat={detailDateFormat}
          />
        </div>
        <p style={{ marginTop: '3rem' }}>
          Before you start playing, please note that you won't be able to modify
          the <span>date</span>, <span>languages</span>, <span>style</span>,{' '}
          <span>className</span>, <span>deleteEvent</span>,{' '}
          <span>detailDefault</span>, <span>sidebarDefault</span> and{' '}
          <span>getCurrentCalendarState</span> props in this demo.
        </p>
        <p>
          For detailed explanations on all available props, check the{' '}
          <a
            href='https://github.com/gjmolter/revo-calendar'
            target='_blank'
            rel='noreferrer noopener'
          >
            README on GitHub
          </a>
        </p>
        <div className='options'>
          <div>
            <label htmlFor='highlightToday'>highlightToday: </label>
            <input
              type='checkbox'
              name='highlightToday'
              checked={highlightToday}
              onChange={(e) => {
                setHighlightToday(e.target.checked)
              }}
            />
          </div>
          <div
            onChange={(e) => {
              setLang(e.target.value)
            }}
          >
            <label htmlFor='lang'>lang: </label>
            <input type='radio' name='lang' value='en' id='en' defaultChecked />
            <label htmlFor='en'> English</label>
            <input type='radio' name='lang' value='pt' id='pt' />
            <label htmlFor='pt'> Portuguese</label>
            <input type='radio' name='lang' value='es' id='es' />
            <label htmlFor='es'> Spanish</label>
            <input type='radio' name='lang' value='de' id='de' />
            <label htmlFor='de'> German</label>
          </div>
          <div>
            <label>primaryColor: </label>
            <button
              onClick={() =>
                setDisplayColorPicker(displayColorPicker === 1 ? 0 : 1)
              }
              className='colorPickerBtn'
            >
              {displayColorPicker === 1 ? 'Close' : 'Pick Color'}
            </button>
            {displayColorPicker === 1 && (
              <div className='pickerContainer'>
                <ChromePicker
                  color={primaryColor}
                  onChangeComplete={(c) => setPrimaryColor(c.hex)}
                  disableAlpha={true}
                />
              </div>
            )}
          </div>
          <div>
            <label>secondaryColor: </label>
            <button
              onClick={() =>
                setDisplayColorPicker(displayColorPicker === 2 ? 0 : 2)
              }
              className='colorPickerBtn'
            >
              {displayColorPicker === 2 ? 'Close' : 'Pick Color'}
            </button>
            {displayColorPicker === 2 && (
              <div className='pickerContainer'>
                <ChromePicker
                  color={secondaryColor}
                  onChangeComplete={(c) => setSecondaryColor(c.hex)}
                  disableAlpha={true}
                />
              </div>
            )}
          </div>
          <div>
            <label>todayColor: </label>
            <button
              onClick={() =>
                setDisplayColorPicker(displayColorPicker === 3 ? 0 : 3)
              }
              className='colorPickerBtn'
            >
              {displayColorPicker === 3 ? 'Close' : 'Pick Color'}
            </button>
            {displayColorPicker === 3 && (
              <div className='pickerContainer'>
                <ChromePicker
                  color={todayColor}
                  onChangeComplete={(c) => setTodayColor(c.hex)}
                  disableAlpha={true}
                />
              </div>
            )}
          </div>
          <div>
            <label>textColor: </label>
            <button
              onClick={() =>
                setDisplayColorPicker(displayColorPicker === 4 ? 0 : 4)
              }
              className='colorPickerBtn'
            >
              {displayColorPicker === 4 ? 'Close' : 'Pick Color'}
            </button>
            {displayColorPicker === 4 && (
              <div className='pickerContainer'>
                <ChromePicker
                  color={textColor}
                  onChangeComplete={(c) => setTextColor(c.hex)}
                  disableAlpha={true}
                />
              </div>
            )}
          </div>
          <div>
            <label htmlFor='animationSpeed'>animationSpeed: </label>
            <input
              type='number'
              name='animationSpeed'
              onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
              value={animationSpeed}
            ></input>
            <span style={{ marginLeft: '10px' }}>ms</span>
          </div>
          <div>
            <label htmlFor='sidebarWidth'>sidebarWidth: </label>
            <input
              type='number'
              name='sidebarWidth'
              onChange={(e) => setSidebarWidth(parseInt(e.target.value))}
              value={sidebarWidth}
            ></input>
            <span style={{ marginLeft: '10px' }}>px</span>
          </div>
          <div>
            <label htmlFor='detailWidth'>detailWidth: </label>
            <input
              type='number'
              name='detailWidth'
              onChange={(e) => setDetailWidth(parseInt(e.target.value))}
              value={detailWidth}
            ></input>
            <span style={{ marginLeft: '10px' }}>px</span>
          </div>
          <div>
            <label htmlFor='showDetailToggler'>showDetailToggler: </label>
            <input
              type='checkbox'
              name='showDetailToggler'
              checked={showDetailToggler}
              onChange={(e) => {
                setShowDetailToggler(e.target.checked)
              }}
            />
          </div>
          <div>
            <label htmlFor='showSidebarToggler'>showSidebarToggler: </label>
            <input
              type='checkbox'
              name='showSidebarToggler'
              checked={showSidebarToggler}
              onChange={(e) => {
                setShowSidebarToggler(e.target.checked)
              }}
            />
          </div>
          <div>
            <label htmlFor='onePanelAtATime'>onePanelAtATime: </label>
            <input
              type='checkbox'
              name='onePanelAtATime'
              checked={onePanelAtATime}
              onChange={(e) => {
                setOnePanelAtATime(e.target.checked)
              }}
            />
          </div>
          <div>
            <label htmlFor='allowDeleteEvent'>allowDeleteEvent: </label>
            <input
              type='checkbox'
              name='allowDeleteEvent'
              checked={allowDeleteEvent}
              onChange={(e) => {
                setAllowDeleteEvent(e.target.checked)
              }}
            />
          </div>
          <div>
            <label htmlFor='openDetailsOnDateSelection'>
              openDetailsOnDateSelection:{' '}
            </label>
            <input
              type='checkbox'
              name='openDetailsOnDateSelection'
              checked={openDetailsOnDateSelection}
              onChange={(e) => {
                setOpenDetailsOnDateSelection(e.target.checked)
              }}
            />
          </div>
          <div>
            <label htmlFor='timeFormat24'>timeFormat24: </label>
            <input
              type='checkbox'
              name='timeFormat24'
              checked={timeFormat24}
              onChange={(e) => {
                setTimeFormat24(e.target.checked)
              }}
            />
          </div>
          <div>
            <label htmlFor='detailDateFormat'>detailDateFormat: </label>
            <input
              type='text'
              name='detailDateFormat'
              value={detailDateFormat}
              onChange={(e) => {
                setDetailDateFormat(e.target.value)
              }}
            />
          </div>
        </div>
        <p>
          Current coponent's JSX code (Some of these could be removed, if it
          wouldn't change the component's defaults):
        </p>
        <div className='code'>
          <code>
            <pre>
              {'<'}
              <span className='codeBlue'>RevoCalendar</span>
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>events</span>
              {'={'}
              <span className='codePurple'>eventList</span>
              {'}'}
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>style</span>
              {'={{'}
            </pre>
            <pre className='tab2'>
              borderRadius:
              <span className='codeYellow'>"5px"</span>
              {','}
            </pre>
            <pre className='tab2'>
              border:
              <span className='codeYellow'>
                "5px solid var(--primaryColor)"
              </span>
            </pre>
            <pre className='tab'>{'}}'}</pre>
            <pre className='tab'>
              <span className='codeGreen'>highlightToday</span>
              {'={'}
              <span className='codePurple'>{highlightToday.toString()}</span>
              {'}'}
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>lang</span>
              {'='}
              <span className='codeYellow'>"{lang}"</span>
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>primaryColor</span>
              {'='}
              <span className='codeYellow'>"{primaryColor}"</span>
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>secondaryColor</span>
              {'='}
              <span className='codeYellow'>"{secondaryColor}"</span>
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>todayColor</span>
              {'='}
              <span className='codeYellow'>"{todayColor}"</span>
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>textColor</span>
              {'='}
              <span className='codeYellow'>"{textColor}"</span>
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>animationSpeed</span>
              {'={'}
              <span className='codePurple'>{animationSpeed}</span>
              {'}'}
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>sidebarWidth</span>
              {'={'}
              <span className='codePurple'>{sidebarWidth}</span>
              {'}'}
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>detailWidth</span>
              {'={'}
              <span className='codePurple'>{detailWidth}</span>
              {'}'}
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>showDetailToggler</span>
              {'={'}
              <span className='codePurple'>{showDetailToggler.toString()}</span>
              {'}'}
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>showSidebarToggler</span>
              {'={'}
              <span className='codePurple'>
                {showSidebarToggler.toString()}
              </span>
              {'}'}
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>onePanelAtATime</span>
              {'={'}
              <span className='codePurple'>{onePanelAtATime.toString()}</span>
              {'}'}
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>allowDeleteEvent</span>
              {'={'}
              <span className='codePurple'>{allowDeleteEvent.toString()}</span>
              {'}'}
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>openDetailsOnDateSelection</span>
              {'={'}
              <span className='codePurple'>
                {openDetailsOnDateSelection.toString()}
              </span>
              {'}'}
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>timeFormat24</span>
              {'={'}
              <span className='codePurple'>{timeFormat24.toString()}</span>
              {'}'}
            </pre>
            <pre className='tab'>
              <span className='codeGreen'>detailDateFormat</span>
              {'='}
              <span className='codeYellow'>"{detailDateFormat}"</span>
            </pre>
            <pre>{'/>'}</pre>
          </code>
        </div>
      </div>
      <footer>
        <p>
          If you find this usefull and it has saved you some time, please
          consider
        </p>
        <div className='bmc'>
          <a
            target='_blank'
            rel='noreferrer noopener'
            href='https://www.buymeacoffee.com/gjmolter'
          >
            <img
              src='https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg'
              alt='Buying me a Coffee'
            />
            <span>Buying me a Coffee</span>
          </a>
        </div>
        <p>
          Also, feel free to contribute with this project on{' '}
          <a
            href='https://github.com/gjmolter/revo-calendar'
            target='_blank'
            rel='noreferrer noopener'
          >
            GitHub
          </a>
        </p>
      </footer>
    </Fragment>
  )
}

export default App

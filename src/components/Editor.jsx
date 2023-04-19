import {useCallback} from 'react'
import { Box } from '@mui/material'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { xml } from '@codemirror/lang-xml'
import { css } from '@codemirror/lang-css'
import {dracula} from '@uiw/codemirror-theme-dracula'

export default function Editor({language}) {
    const onChangeHandler = useCallback((value, viewUpdate) => {
        console.log('value:', value);
      }, []);

    const javascriptCode = <CodeMirror
                                height="400px"
                                minWidth='33vw'
                                maxWidth='33vw'
                                extensions={[javascript({jsx: true})]}
                                value="console.log('Hello World!');"
                                theme={dracula}
                                onChange={onChangeHandler}
                            />
    const xmlCode = <CodeMirror
                                height="400px"
                                minWidth='33vw'
                                maxWidth='33vw'
                                extensions={[xml()]}
                                value="<h1>Hello World!!</h1>"
                                theme={dracula}
                                onChange={onChangeHandler}
                            />
    const cssCode = <CodeMirror
                                height="400px"
                                minWidth='33vw'
                                maxWidth='33vw'
                                extensions={[css()]}
                                value="h1{color: aquamarine;}"
                                theme={dracula}
                                onChange={onChangeHandler}
                            />
  return (
    <Box className='editorBox'>
        <Box className='editorBar'>
            <span className='htmlIcon'>
            {(language == 'javascript') ? <JavascriptIcon fontSize='large' />: ((language == 'xml') ? <HtmlIcon fontSize='large'/> : <CssIcon fontSize='large'/>)}
                </span>
            <Box component='span' className='utilityIcons' >
                <span className='settingsIcon rightIcon'><SettingsIcon fontSize='smaller'/></span>
                <span className='arrowIcon rightIcon'><KeyboardArrowDownIcon fontSize='medium' /></span>
            </Box>
        </Box>
        <Box className='editor'>
        {/* {(language == 'javascript') ? javascriptCode: null}
        {(language == 'xml') ? xmlCode: null}
        {(language == 'css') ? cssCode: null} */}
        {(language == 'javascript') ? javascriptCode: ((language == 'xml') ? xmlCode : cssCode)}
        </Box>
    </Box>
  )
}

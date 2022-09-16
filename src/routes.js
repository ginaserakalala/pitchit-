import React from 'react'
import {Switch, Route} from 'react-router-dom'

import GlobalFeed from './pages/globalFeed'
import YourFeed from './pages/yourFeed'
import TagFeed from './pages/tagFeed'
import Article from './pages/pitch'
import Authentication from './pages/authentication'
import CreatePitch from './pages/createPitch'
import EditPitch from './pages/editPitch'
import Settings from './pages/settings'
import UserProfile from './pages/userProfile'

import Membership from './components/membership'
import CreditCard from './components/creditCard'
import Testimonials from './components/testimonials'
import About from './components/about'
import Services from './components/services'
import Echo from './components/echo'
import Questionnaire from './components/questionnaire'
import PitchFormQuestionnaire  from './components/PitchFormQuestionnaire'
import PitchForm from './components/PitchForm'
import UploadImg from './components/uploadImg'
import ChatRoom from './components/chats/ChatRoom'

import News from './components/news/News'

import NewsItem from './components/newsitem/NewsItem'
import DropdownImageTriggerExample from './components/test'
import Credit from './components/credit'
import InvestorProfile from './components/investorProfile'

//#3786ac

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/profiles/:slug" component={UserProfile} />
      <Route path="/profiles/:slug/favorites" component={UserProfile} />
      <Route path="/settings" component={Settings} exact />
      <Route path="/pitches/new" component={CreatePitch} />
      <Route path="/pitches/:slug/edit" component={EditPitch} />

      <Route path="/feed" component={YourFeed} exact />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/articles/:slug" component={Article} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />


      
      <Route path ="/echo" component={Echo}/>

      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      
      <Route path="/questionnaire2" component={Questionnaire} />
        <Route path="/questionnaire" component={PitchFormQuestionnaire} />


      <Route path="/membership" component={Membership} />
      <Route path="/news"  component={News} />

      <Route path='/newss' component={NewsItem} />
      {/* <Route path="/creditcard" component={CreditCard} /> */}

      <Route path="/creditcard" component={Credit} />

      <Route path="/uploadimg" component={UploadImg} />

      {/* <Route path="/chatroom/:roomId" component={ChatRoom} /> */}

      <Route path="/chatroom" component={ChatRoom} />

      <Route path="/trigger" component={DropdownImageTriggerExample} />

      <Route path="/investorprofile" component={InvestorProfile} />


      {/* <Route path="/testimonials" component={Testimonials} /> */}

    </Switch>
    
  )
}
export default Routes

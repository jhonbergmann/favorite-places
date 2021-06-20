import React, { useRef, useState, useContext, createContext } from 'react'

const GlobalContext = createContext()

export default GlobalContextProvider = ({ children }) => {

  const [onClickSearch, setOnClickSearch] = useState(false)

  const [isLoadedHomeScreen, setIsLoadedHomeScreen] = useState(false)
  const [places, setPlaces] = useState([])
  const carouselRef = useRef(null)

  const [isLoadedMainScreen, setIsLoadedMainScreen] = useState(false)
  const [place, setPlace] = useState([])

  const [modalAddressVisible, setModalAddressVisible] = useState(false)
  const [modalCommentsVisible, setModalCommentsVisible] = useState(false)
  const [modalErrorMessageVisible, setModalErrorMessageVisible] = useState(false)
  const [modalSendCommentVisible, setModalSendCommentVisible] = useState(false)
  const [modalVideoVisible, setModalVideoVisible] = useState(false)

  const [search, setSearch] = useState('')
  const [filteredPlaces, setFilteredPlaces] = useState([])

  const [userInfo, setUserInfo ] = useState({})

  return (
    <GlobalContext.Provider
      value={{
        /* HeaderContext */
        onClickSearch,
        setOnClickSearch,

        /* HomeScreenContext */
        isLoadedHomeScreen,
        setIsLoadedHomeScreen,
        places,
        setPlaces,
        carouselRef,

        /* MainScreenContext */
        isLoadedMainScreen,
        setIsLoadedMainScreen,
        place,
        setPlace,

        /* ModalAddressContext */
        modalAddressVisible,
        setModalAddressVisible,

        /* ModalCommentContext */
        modalCommentsVisible,
        setModalCommentsVisible,

        /* ModalErrorMessage */
        modalErrorMessageVisible,
        setModalErrorMessageVisible,

        /* ModalSendComment */
        modalSendCommentVisible,
        setModalSendCommentVisible,

        /* ModalVideoContext */
        modalVideoVisible,
        setModalVideoVisible,

        /* Search */
        search,
        setSearch,
        filteredPlaces,
        setFilteredPlaces,

        /* LoginGoogle */
        userInfo,
        setUserInfo
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  const context = useContext(GlobalContext)
  const {
    onClickSearch,
    setOnClickSearch,

    isLoadedHomeScreen,
    setIsLoadedHomeScreen,
    places,
    setPlaces,
    carouselRef,

    isLoadedMainScreen,
    setIsLoadedMainScreen,
    place,
    setPlace,

    modalAddressVisible,
    setModalAddressVisible,
    modalCommentsVisible,
    setModalCommentsVisible,
    modalErrorMessageVisible,
    setModalErrorMessageVisible,
    modalSendCommentVisible,
    setModalSendCommentVisible,
    modalVideoVisible,
    setModalVideoVisible,

    search,
    setSearch,
    filteredPlaces,
    setFilteredPlaces,

    userInfo,
    setUserInfo
  } = context

  return {
    onClickSearch,
    setOnClickSearch,

    isLoadedHomeScreen,
    setIsLoadedHomeScreen,
    places,
    setPlaces,
    carouselRef,

    isLoadedMainScreen,
    setIsLoadedMainScreen,
    place,
    setPlace,

    modalAddressVisible,
    setModalAddressVisible,
    modalCommentsVisible,
    setModalCommentsVisible,
    modalErrorMessageVisible,
    setModalErrorMessageVisible,
    modalSendCommentVisible,
    setModalSendCommentVisible,
    modalVideoVisible,
    setModalVideoVisible,

    search,
    setSearch,
    filteredPlaces,
    setFilteredPlaces,

    userInfo,
    setUserInfo
  }
}
module Demo.LayoutGrid exposing
    ( Model
    , Msg(..)
    , defaultModel
    , update
    , view
    )

import Browser.Dom
import Browser.Events
import Demo.Helper.Hero as Hero
import Demo.Helper.ResourceLink as ResourceLink
import Demo.Page as Page exposing (Page)
import Html exposing (Html, text)
import Html.Attributes
import Html.Events
import Json.Decode as Json
import Material.LayoutGrid as LayoutGrid exposing (layoutGrid)
import Material.Typography as Typography


type alias Model =
    {}


defaultModel : Model
defaultModel =
    {}


type Msg
    = NoOp


update : (Msg -> m) -> Msg -> Model -> ( Model, Cmd m )
update lift msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )


demoGrid : List (Html.Attribute m) -> List (Html m) -> Html m
demoGrid options =
    layoutGrid
        (Html.Attributes.style "background" "rgba(0,0,0,.2)"
            :: Html.Attributes.style "min-width" "360px"
            :: options
        )


demoCell : List (Html.Attribute m) -> Html m
demoCell options =
    LayoutGrid.cell
        (Html.Attributes.style "background" "rgba(0,0,0,.2)"
            :: Html.Attributes.style "height" "100px"
            :: options
        )
        []


heroGrid : Html m
heroGrid =
    demoGrid [] (List.repeat 3 (demoCell []))


columnsGrid : Html m
columnsGrid =
    demoGrid []
        [ demoCell [ LayoutGrid.span6 ]
        , demoCell [ LayoutGrid.span3 ]
        , demoCell [ LayoutGrid.span2 ]
        , demoCell [ LayoutGrid.span1 ]
        , demoCell [ LayoutGrid.span3 ]
        , demoCell [ LayoutGrid.span1 ]
        , demoCell [ LayoutGrid.span8 ]
        ]


leftAlignedGrid : Html m
leftAlignedGrid =
    demoGrid
        [ LayoutGrid.alignLeft
        , Html.Attributes.style "max-width" "800px"
        ]
        [ demoCell []
        , demoCell []
        , demoCell []
        ]


rightAlignedGrid : Html m
rightAlignedGrid =
    demoGrid
        [ LayoutGrid.alignRight
        , Html.Attributes.style "max-width" "800px"
        ]
        [ demoCell []
        , demoCell []
        , demoCell []
        ]


cellAlignmentGrid : Html m
cellAlignmentGrid =
    demoGrid
        [ Html.Attributes.style "min-height" "200px"
        ]
        [ demoCell [ LayoutGrid.alignTop, Html.Attributes.style "min-height" "50px" ]
        , demoCell [ LayoutGrid.alignMiddle, Html.Attributes.style "min-height" "50px" ]
        , demoCell [ LayoutGrid.alignBottom, Html.Attributes.style "min-height" "50px" ]
        ]


view : (Msg -> m) -> Page m -> Model -> Html m
view lift page model =
    page.body "Layout Grid"
        "Material design’s responsive UI is based on a 12-column grid layout."
        [ Hero.view []
            [ heroGrid
            ]
        , Html.h2
            [ Typography.headline6
            , Html.Attributes.style "border-bottom" "1px solid rgba(0,0,0,.87)"
            ]
            [ text "Resources"
            ]
        , ResourceLink.view
            { link = "https://material.io/components/web/catalog/layout-grid/"
            , title = "Documentation"
            , icon = "images/ic_drive_document_24px.svg"
            , altText = "Documentation icon"
            }
        , ResourceLink.view
            { link = "https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid"
            , title = "Source Code (Material Components Web)"
            , icon = "images/ic_code_24px.svg"
            , altText = "Source Code"
            }
        , Page.demos
            [ Html.h3
                [ Typography.subtitle1 ]
                [ text "Columns" ]
            , columnsGrid
            , Html.h3
                [ Typography.subtitle1 ]
                [ text "Grid Left Alignment" ]
            , Html.p
                [ Typography.body1 ]
                [ text "This requires a max-width on the top-level grid element." ]
            , leftAlignedGrid
            , Html.h3
                [ Typography.subtitle1 ]
                [ text "Grid Right Alignment" ]
            , Html.p
                [ Typography.body1 ]
                [ text "This requires a max-width on the top-level grid element." ]
            , rightAlignedGrid
            , Html.h3
                [ Typography.subtitle1 ]
                [ text "Cell Alignment" ]
            , Html.p
                [ Typography.body1 ]
                [ text "Cell alignment requires a cell height smaller than the inner height of the grid." ]
            , cellAlignmentGrid
            ]
        ]
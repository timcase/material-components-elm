module Material.HelperText exposing (helperLine, helperText, helperTextConfig, HelperTextConfig)

{-| Helper text gives context about a field’s input, such as how the input will
be used. It should be visible either persistently or only on focus.


# Table of Contents

  - [Resources](#resources)
  - [Basic Usage](#basic-usage)
  - [Helper Text](#helper-text)
  - [Persistent Helper Text](#persisten-helper-text)


# Resources

  - [Demo: Text fields](https://aforemny.github.io/material-components-elm/#text-fields)
  - [Material Design Guidelines: Text Fields Layout](https://material.io/go/design-text-fields#text-fields-layout)
  - [MDC Web: Text Field Helper Text](https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield/helper-text)
  - [Sass Mixins (MDC Web)](https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield/helper-text#sass-mixins)


# Basic Usage

    import Material.HelperText exposing (helperText, helperTextConf)
    import Material.TextField exposing (textField, textFieldConf)

    main =
        Html.div
            [ textField { textFieldConf | label = "Your name" }
            , helperLine [] [ helperText helperTextConf "Please fill this" ]
            ]


# Helper Text

The helper line is expected to be a direct sibling of the text field it belongs
to and the helper text is expected to be a direct child of the helper text
line.

@docs helperLine, helperText, helperTextConfig, HelperTextConfig


# Persistent Helper Text

A text field's helper text may show unconditionally by setting its `persistent`
configuration field to `True`. By default a text field's helper text only shows
when the text field has focus.

-}

import Html exposing (Html, text)
import Html.Attributes exposing (class)


{-| Configuration of a helper text
-}
type alias HelperTextConfig msg =
    { persistent : Bool
    , invalid : Bool
    , additionalAttributes : List (Html.Attribute msg)
    }


{-| Default configuration of a helper text
-}
helperTextConfig : HelperTextConfig msg
helperTextConfig =
    { persistent = False
    , invalid = False
    , additionalAttributes = []
    }


{-| Helper text view function

The helper text is expected to be a direct child of the text line.

-}
helperText : HelperTextConfig msg -> String -> Html msg
helperText config string =
    Html.div
        (List.filterMap identity
            [ helperTextCs
            , persistentCs config
            , validationMsgCs config
            , ariaHiddenAttr
            ]
            ++ config.additionalAttributes
        )
        [ text string ]


{-| Helper text line view function

The text line is expected to be the wrapping element of the helper text. It is
expected to be a direct sibling of the text field that it belongs to.

-}
helperLine : List (Html.Attribute msg) -> List (Html msg) -> Html msg
helperLine additionalAttributes nodes =
    Html.div (helperLineCs :: additionalAttributes) nodes


helperTextCs : Maybe (Html.Attribute msg)
helperTextCs =
    Just (class "mdc-text-field-helper-text")


helperLineCs : Html.Attribute msg
helperLineCs =
    class "mdc-text-field-helper-line"


persistentCs : HelperTextConfig msg -> Maybe (Html.Attribute msg)
persistentCs config =
    if config.persistent then
        Just (class "mdc-text-field-helper-text--persistent")

    else
        Nothing


validationMsgCs : HelperTextConfig msg -> Maybe (Html.Attribute msg)
validationMsgCs config =
    if config.invalid then
        Just (class "mdc-text-field-helper-text--validation--msg")

    else
        Nothing


ariaHiddenAttr : Maybe (Html.Attribute msg)
ariaHiddenAttr =
    Just (Html.Attributes.attribute "aria-hidden" "true")

## Components

1. [Introduction](#introduction)
2. [Br](#br)
3. [Button](#button)
4. [Card](#card)
   - [Illustration Card](#illustration-card)
   - [POS Card](#pos-card)
5. [Container](#container)
6. [Header](#header)
   - [Page Header](#pageheader)
   - [Policy Header](#policy-header)
   - [Section Header](#section-header)
7. [Info Grid Section](#info-grid-section)
8. [Input](#input)
9. [Nlink](#nlink)
10. [NText](#ntext)
11. [POS Terminals](#pos-terminals)
12. [Read More](#read-more)
13. [Slider](#slider)
14. [Testimonial](#testimonial)
15. [Timeline](#timeline)

## Introduction

All the components in this website is according to the style guide and component created by the design team and can be found [here](https://www.figma.com/file/wznMAVy9JlQTHI33Esrb6C/Nomba-%5BWebsite%5D?node-id=178%3A6130). We strongly advise you to consult with the design team before deviating from some standards set in the components. Like you will observe, some components do not accept an additional `prop` to modify the style externally as we strictly followed creating `variants` for these components, if the design team is feeling 'creative' and going out of variant, we recommend that you ask them to create a variant for this component instead, so you wouldn't have to modify the style.

_Also, we believe there is no such thing as 'best practice' so please feel free to deviate from the approach we might have adopted._

We have given a high level overview of each component below.

**\*TBD** means **To Be Determined**

## Br

Sometimes it's necessary to break lines of text on mobile, pc, or table screen alone. This component allows you to do just that without having to manually create the styling for this everywhere you need it.

| prop | description | possible value(s)    |
| ---- | ----------- | -------------------- |
| on   |             | all, desktop, mobile |

## Button

The button component can be used both as a regular button for actions or as a button for links. Kindly see the table below

| prop         | description                                       | possible value(s)                                                     |
| ------------ | ------------------------------------------------- | --------------------------------------------------------------------- |
| text         | the text on the button                            | string, TBD                                                           |
| trackingText | idenitifier for mixpanel                          | string, TBD                                                           |
| variant      | primarily determines the color of the button      | primary, alternative                                                  |
| size         | button size according to the design system        | xsmall, small, medium, large, xlarge                                  |
| href         | link a button to external links                   | TBD can be an object or a link, kindly see Nlink for more information |
| to           | link a button to internal links                   | string, TBD                                                           |
| onClick      | action to be carried out when a button is clicked | function, TBD                                                         |
| disabled     | control whether button is disabled or not         | boolean, TBD - passed from parent                                     |
| isLoading    | control loading state of button                   | boolean, TBD - passed from parent                                     |

## Card

### Illustration Card

This card is used for sections that have illustrations. It has the following props.

| prop         | description                                                                                                                                                  | possible value(s) |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| illustration | svg of the illustration                                                                                                                                      | svg, TBD          |
| title        | card heading/title                                                                                                                                           | string, TBD       |
| description  | supporting text of the card                                                                                                                                  | string, TBD       |
| link         | this is an object that determines if a link will show up - it should accept anything that `NLink` would accept as a destination linke e.g `to`, `href`, etch | object, TBD       |

### POS Card

This Card component can be used to display the different POS devices, their features, images, as well as their prices. It accepts the following `props`

| prop     | description                                                         | possible value(s) |
| -------- | ------------------------------------------------------------------- | ----------------- |
| device   | This is an object that displays the device name, price and type     | object, TBD       |
| icons    | These are icons displayed on the card                               | array, TBD        |
| isLite   | This is a boolean that determines the background colour of the card | boolean, TBD      |
| image    | Image of device to be displayed                                     | TBD               |
| features | This displays the features of the device                            | array, TBD        |

## Container

This component essentially sets the `max-width` for a section. It accepts the following props:

| prop      | description        | possible value(s) |
| --------- | ------------------ | ----------------- |
| children  | markup/jsx         | TBD               |
| className | custom css classes | string, TBD       |

## Header

This houses components for all headers used on different pages. There are 3 components currently in this folder.

- Page Header
- Policy
- Section

### PageHeader

This component can be used on all pages. It is the first thing you see on any page. It comprises of an image, some texts and a button. It accepts the following `props`

| prop                 | description                                             | possible value(s) |
| -------------------- | ------------------------------------------------------- | ----------------- |
| pageHeaderText       | The text to be displayed as heading for the section     | string            |
| pageHeaderSubText    | The text to be displayed as sub heading for the section | string            |
| pageHeaderButtonText | The text on the button                                  | string, TBD       |
| image                | Image to be displayed on the page header                | image             |

### Policy Header

This component can be used for a policy page. It accepts the following `props`:

| prop    | description                     | possible value(s) |
| ------- | ------------------------------- | ----------------- |
| heading | The title of the page           | string/jsx, TBD   |
| date    | The date the policy was updated | string, TBD       |

### Section Header

This component can be used to wrap headings that need a `padding-top`, `padding-bottom` and needs to be centered. It accepts the following `prop`

| prop      | description            | possible value(s) |
| --------- | ---------------------- | ----------------- |
| classname | For additional styling | string            |

## Info Grid Section

This component can be used in pages and sections where you need to display information alongside an image in a grid. It is used in the tips and update section on the home page.
The section spans 4 columns on desktop, 2 on tablets and a single column on mobile. Styles have been added so there is no provision for additional styling and customization. It accepts the following props:

| prop    | description                                                                    | possible value(s) |
| ------- | ------------------------------------------------------------------------------ | ----------------- |
| list    | An array containing the information (text,dates,images) that will be displayed | object, TBD       |
| heading | The text to be displayed as heading for the section                            | string, TBD       |

## Input

As its name implies, the input component can be used in anywhere that requires an input.

Styles that cover different states such as hover, focus, and error have been added to it, which means there will be no need for additional style customization. It accepts the following props:

| prop        | description                                              | possible value(s) |
| ----------- | -------------------------------------------------------- | ----------------- |
| required    | to show that the information to be collected is required | boolean, TBD      |
| label       | The label at the top of the input                        | string , TBD      |
| register    | A react hook form object to register the input           | object , TBD      |
| error       | The text to show if an error occurs                      | string , TBD      |
| placeholder | The input placeholder                                    | string , TBD      |

## NLink

This is our sweet spot between `Link` which ships with `gatsby` and the native anchor `a` tag for external links

| prop | description                                                                                   | possible value(s)  |
| ---- | --------------------------------------------------------------------------------------------- | ------------------ |
| to   | used to link to internal pages on the website - basically all gatsby pages                    | string, TBD        |
| href | this could be a string or an object. Use a string if you don't need the to open on a new page | string/object, TBD |

## Ntext

Contains variants of the texts according to the design system.

| prop    | description                                                       | possible value(s)                                            |
| ------- | ----------------------------------------------------------------- | ------------------------------------------------------------ |
| value   | Expected to be text not jsx                                       | string                                                       |
| variant | valid html tags                                                   | h1, h2, h3, h4, h5, h6, p12, p14, p16                        |
| color   | any valid color in the design system; anything else will not work | e.g `primary-100`, `secondary-400`. see `tailwind.config.js` |

## POS Terminals

This component can be used when the POS terminal cards needs to be displayed on any page.

| prop  | description                                         | possible value(s) |
| ----- | --------------------------------------------------- | ----------------- |
| title | The text to be displayed as heading for the section | string            |

## Read More

The read more component is primarily as a `tertiary CTA` in various section of the website.

| prop  | description                            | possible value(s)                          |
| ----- | -------------------------------------- | ------------------------------------------ |
| text  | The text of the CTA                    | string, has a default value of `Read more` |
| color | color of the text                      | based on the color system                  |
| props | expected to be valid props for `NLink` | `to/href`                                  |

## Slider

In pages and sections where images and corresponding information need to be displayed, this component comes in handy.
It can be seen in places like the homepage where a slide of pictures and information are shown. There is no need for additional customization. It accepts only one prop.

| prop   | description                                                                     | possible value(s) |
| ------ | ------------------------------------------------------------------------------- | ----------------- |
| slides | An array containing the information (Text, images, link) that will be displayed | object, TBD       |

## Testimonial

This component is used to display testimonials from partners of Nomba. You can find it used on the various business pages. It accepts the following props:

| prop         | description                                                                         | possible value(s) |
| ------------ | ----------------------------------------------------------------------------------- | ----------------- |
| testimonials | An array containing the information (testimonial and images) that will be displayed | object, TBD       |
| headingText  | The text to be displayed as heading for the section                                 | string, TBD       |

## Timeline

The timeline component can be used when creating sections that have different steps or are educational in nature. It breaks information into steps for easy understanding. It is used in "products/accept-payments page". It accepts the following props:

| prop         | description                                                              | possible value(s) |
| ------------ | ------------------------------------------------------------------------ | ----------------- |
| reverse      | To reverse the order of the section and have the image show on the right | boolean, TBD      |
| timelineData | An array containing the information that will be displayed               | object, TBD       |
| image        | The image that will be displayed with the content                        | node , TBD        |
| heading      | The text to be displayed as heading for the section                      | string, TBD       |
| subHeading   | The text to be displayed as sub heading for the section                  | string , TBD      |

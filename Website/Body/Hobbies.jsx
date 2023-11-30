import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Card,
  Text,
  AvatarGroup,
  Avatar,
  PopoverTrigger,
  Popover,
  Box,
  PopoverHeader,
  Button,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  PopoverBody,
  PopoverFooter,
  Image,
  Spacer,
  ButtonGroup,
  Icon,
} from "@chakra-ui/react";
import { ViewIcon, LinkIcon } from "@chakra-ui/icons";
import { BiSolidJoystick } from "react-icons/bi";
import { IoHeadsetSharp } from "react-icons/io5";
import { MdCleaningServices } from "react-icons/md";
import { IoMdEye } from "react-icons/io";

export default function Hobbies() {
  const initialFocusRef = React.useRef();
  const handleButtonClick = () => {
    // Redirect to the desired URL when the button is clicked
    window.location.href = "https://youtu.be/sLykke8q2ls?si=tQwlEGG0ibqNavt5";
  };
  const handleButtonClickTitliaan = () => {
    // Redirect to the desired URL when the button is clicked
    window.location.href = "https://youtu.be/YPohR_9v6HA?si=OLDDrkaaCe5WKijD";
  };
  const handleButtonClickchampa = () => {
    // Redirect to the desired URL when the button is clicked
    window.location.href = "https://youtu.be/_cW8X9FE4iM?si=42wnZamNG8e8e5QY";
  };
  const handleButtonClickjpn = () => {
    // Redirect to the desired URL when the button is clicked
    window.location.href = "https://youtu.be/a2GujJZfXpg?si=S5QbrDd4TMJIaFsj";
  };

  return (
    <Container
      flex={1}
      textAlign={"center"}
      justifyContent={"center"}
      mt={"60px"}
    >
      <Card size={"lg"}>
        <Tabs>
          <TabList lineHeight={"70px"} gap={"30px"}>
            <Tab fontWeight={"700"} fontSize={"17px"}>
              <Icon boxSize="26px" as={BiSolidJoystick} /> Online Games
            </Tab>
            <Tab fontWeight={"700"} fontSize={"17px"}>
              <Icon boxSize="26px" as={IoHeadsetSharp} /> Listening Music
            </Tab>
            <Tab fontWeight={"700"} fontSize={"17px"}>
              <Icon boxSize="26px" as={MdCleaningServices} />
              Clean Room
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Text textAlign="left" fontSize={"19px"}>
                Since 2018, I'm playing onlines games including PUBG, Freefire,
                Clash of Clan, Mini Miltia and so on. I prefer playing survival
                games with my close ones only. Online games is being roling a
                important factor for an entertainment purpose. i have been
                making an international friends too which is so relaxing for me.
                I have listed some games which you can try for free.
              </Text>
              <AvatarGroup
                size="xl"
                max={4}
                my={"30px"}
                gap={"4px"}
                px={"70px"}
                w={"100%"}
              >
                <Avatar
                  name="PUBG"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBgUFRQYGRgaGxsbGxsYGxwYHRsaGxoaGxgYGhwbIC0kGyApIhsbJTclKS4wNDQ0GyM5PzkxPi0yNDABCwsLEA8QHRISHTIpIykyNTIyNTIyMjIyMjUyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEwQAAIBAgQCBgUIBQoFBAMAAAECEQADBBIhMQVBIlFhcYGRBhMyobEjQlJissHR8BRygpLhFSQzU1Rzk6LS4hY0s8LxZIOE0wdDY//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EAC8RAAICAQMDAQYGAwEAAAAAAAABAhEDEiExBBNRQQUUIlKBkTJCYXGhwWLR4ST/2gAMAwEAAhEDEQA/ANBcu6+XwFct3dRQly6J17Nu4Vy3c1ETNcbOgnuXaha5vUNy8NdKgN3f886VFIWIftqnx6yj+Hxqwu3KrsU/Rb886pITZUjQUluwQe2uXGqFjWhI25hnknLuTzHXRYtfIFNA3rFaSREBXBE9fSHkarktPcfIis7EmFUFie4DU1oE9Gr5s5XCW2zghblxUYgBwZE6bihpggHDrlUAMrb+yZAnWO+jbLanwqqvYS7hzNy2Qp0zDVT3MND50RbvCJ5Gk0OLDUsJ6xbktmGhGkSBl7zpRi3ekPGqb9IgaHSnti8qZ4JE5fHUx7j5UqKsP4hjVRFDJnzfNJyiAZnTlMaV1uJKMKjCzbINwjI0soIDdKNNdPeazly8XMnw7B1CjiT+jDq9Z78r/jSlBbApWF2uLXLhCZLaDboWwh26xryq1tof/NZvCPlYN1Ve28W5tm51MFjlqJmk0lwNMs7WkDsrl/FE2rihj0cmoMa5tfuHhVMcU7c47tKLwg+Su67ZNP2qloC5tP0R3D4VIjGs+t5uurLhjl2YMSegYnXX7qHYDMYflG8Psip+FNFxT3/A0ArUZwxouJpO+n7JofADsOctw6gQWGvjR4xC7ZgeqKqsQYd/1m+JpttukO8fGmBZ4zEaFNQ3MeRobD3ArBjMCZjupcTPyjbfNOn6oofNQSW2IxoULC+0J3+NAX8SX3ruMboWj9Ujyy/jQealyBY2x8g5+sPin40FNT2H+Rud4+0lScL4RdxGqABAYLsYE9QA1Y68h40ITGcPE3ImND50Et4r86PGtlhuC2sOczTdf63RQfsjfuJNW2HW2qjJbRTHzEUd2wotXQnLY85/S2+l7hSr00X36zSp2idR5xeudLwH2RXLVzpDvoXE3Ol4L9kVzDv0x31dbFWTXLup7zUatM9xPlrUF5+ke8/Gu4ZpY9x+Boa2GmR3LtCu0q3YPvpO9Mt6q/6p92tOhFRiXM1JgcM12VQS5KBB1lnRB9qocTWo/wDx3ZIuXL/RCojhS+2f5ODHPKDJ8Kt7IS3ZdYwpw6wbOHQtfYfKX9AJ5iTss7CR515vj7rM2ZriknUnOG+zNWfGcX6y85uS5B3doUaTIQCI22jx51OPxSAgW3ttIBORXAneOnG3dTiOSfoEcM4w9t4LoyNoysegQTswbQVbcd4etu0j2yDbuOGUTmK9F5QmIMGYIJ0idayD4puYVu1gR7wRV96POtxfUXAQrsMpU6K/sqwU77wTO1EkSrAiasd8Ly0uL36rc/Cq0GjUuj1BSdc6kDuDyfeKllIGU1ZoxOFIkwLgPZsR99VqWydhP566sLOFIHSfKvV+dKUhxQ2yKtMPdUWntmczEEeBXfwmgbC6kLJg6aTI7RR9vEOpyyFI30FTIpIS2TvB8jReGZgrqFBDLJmBAB9oTvUn6KWQubkgAnTmQJjenWsGDbzyZgkdWk6d341GoqiJMO3Z5r+NE4V2tMWjlG4+6h8PlEFlkRqNQY+ksb935BeIsW4T1Y9tgAZJ08e2KVhQMi6Ty2qfDNDqT2/CpcfhhbggwpMEb6jn767YwYZipeDupiQy8iPz8KLCiHFNNxyNi7Ed2YxTFbWpr2FZXCAhiRPV1/hUGYRqPLQ0xBWPebk9YHwoYtUmJuB2zLpoNCdf40OASYAMnQDnJ2FJCYbdlktqASxJAAEkk5dABvVjhvRbEvGYJbH12kx3LPvitPw/ga2kVS0so6RUASdyJ1Mdmk86Peyo3ZiPrMY7o51ag/BnKaMthuDYdbdzPimdVjN6tI5/NnNm1HKrnD37S21W2ciKBBboiNzmLbbyZiSeetE3DaIIjQ77gGNp11251IX6gJ30FNQkS5oz2NS7cYFHCiWEgFtNwTJCmeyerfWiMJh7yAA4hjG+W2qk9gJZwPLw50WcUxmBruNQPEknbUa1y5cdFl13BMTrAEsYMHQa6AwNeus1hqVtj7m2yBvV3P6y9/iJ/pNKpP0huTT3z+NdrbtGffR5ziH6Xgv2RTbL9Id9RYl+l4L9labZfpDvp+hpe5JefpHvPxp2Efp+B+FDX36Td5+NSYF+mPH4UmthrkHZ6VjUP+ox9xqMz1GnYcxnnmrAd5UwKbBFbfrT+ilp7dtWNxctzPcVIMqFYW3LHaCQpjs76zV223VVt6M3S1w27jaG1ct2xpoSVbKO0w3uoluhw2YJiL4Nwm3bV2k9J/Z6tFE+e+tC43E3ySrZVjkFbyEmjMXcGG6bhhJKjKpJLLErpoDrMEg0LxLjjXumLbkMBBJB8SAp13+dz7KaCr2Ka9irw+efAkfCrH0dY+sFw286oQ7CYIymcwbw56ddBW7TXGyhG1Mbx9xrQ+iD2luOjvlDKyguNJggdIToesxvVWhaWikRZOmv551M6ZQJ69deVMS6QIAjup1vKRqdT11A0PBYAkSB10VYQA/KA9+491RWruZMgUsxEQBO2xozA27jiAQANCef58qlstKw7AsouaEZSvYBp/4ogNa9YxYgqV1jXXTq56UMLFpBBcs31dfCNvfRlrDO+UraVI5nQN1SrSfjWTaNVFkJcAkW2YqRBEdfLt76Ow2KPq8nq3MAqSBoJnyqUYa7zuADqUfwFTWOHa5jccnrBjw51Dkh6GCW7qm2qlHlZhlG2pMio7NzKysVMAyRsJ6wOR/CrX+SLX1vP+FIcJt9b+Y/CnqQnEbexNu5ct9IFQSWzaDlAM91Ne3lItg881p+3mhP599S3OGKfnNPWYPnoJoZuDt81lPfK/jTTQmgjhp9Y73DvoAOr8x8aGQK9xwRCuWVTyDaGfh50rOFvWySEJ0I06QI8Oo6123ctm16ucrqSwzadLv5aaaxQSEYawlxCrrDocpI0OmxPX/CpfRjDesxKmMyIS0kfR1TuOYrVdicRIW4rAG4pRxtqIk9kiK0PAnFp0tg+0reJWGJ8/iKqPO5M/ws1Ny+dYI030HxNVmLuMxBJkR9wn76HxfFLSNle4gA3AcHXq01PXtVfifSKxrluDlyfWO5a6GzjZdes+TmQN/OOfdPupmIv5ZBg6c+1TEAHrHVWcv+kNsAj1mmk9AnvAl1iZjwqG56VWGJGZwDzASeWgJfTT4GlqFTLLEYlrdu5dt2xcugKQhZkUpmAcjKdwWY6SeXzooHDOl50uW7eVVtu7lra20nK2W0SqLnYOFubHKiN9IyJa9J7QKgLd6IIBDTod5AtmRt17bVKnHw6hblrEOo1VALiiRGWAtpFgFQdJ1HfUvlmkZNRqi6tcQCDKtpsoJyjLsknINuQgeFKqf+X+vA3uve4d9fpUqvWjHtsyb3Nevb4Cmrc1qO+/S8F+yKZbfpCkdJK90zXbTkmN9DUF1uk3efjUmCbpik+ClyRtcJ5mkhJDdgJqKakw/z/wBRvstQxIDuVCySjnqAP+ZR99bD0f4DZuWjfxDGPmoDk2npOdyDyy9W9RpwjDPeFm5NtbjZc6SNyCqwxMAlYnfUztNGpXRSg6sseH+jI/ktBdgm63rlgapnRQon6UCfHnWHuWblhnSWyk65WydepGx0A/hXsvH+KphbMOFAGW2inaTCKWj2UWQS0jaOdUnpJwEOvrLZDLEhhBmeemhBkajr8aialFtrdGsHGSUXs/J5bw9GzsWZzCsQGMyQCVEdpgeJpBZEwYEA9cddXt/DCxbe80Eg5bYIEG5qQWB5LE98cqrreBuXsrW+kWHSBZVOce0IJGYkFW0n2quLclZE0ouiBnCkFfEDqqe3YL9JiAOykpuYclLlpdd1uW+l4SAw8DUmHwhfclU3CzPb+ZpNhFWOsOUf5FnD/UYgR29Y91XFvANcbNcaWMZgsCT9aNJ8KkwGGVB0RA+J7ev+NHqTH52rnnPwdWPH5O4awieyoHbz896OQ0MlFWlnsrCUzqjiHqtTKIpC2RXHMa1n3Et2N4rG3rh2HnQ8H6T/ALzfjUePM23P1G+yaOVwAJ6q4oylkblrpJ/Q2cIwSjpt0C5T9J/3m/GuifpP+8340amIQbk+VS2OI2mUMGzKdiAeRIIIOoIIIIOoIq1BtX3XRnKaTrtblfmb6b/vN+NQXrAf28x72afOZq2wvFbVxPWIxK5mScrDpL7Qgiee9MtcWsvca0rnOih3BVhCnLBkiD7S6A86vsTtruO1uzLvRpPtKmU/8nW/ot+834058IjETmJAgS7aDq3q5bFp1nyqrx2OtG6iCfXDpDoN7OVg3SiI7JohjlN7ZmOeRRVvEgZuGWjurHvd/wDVTDwmzOqebN+NGYhmIIHS00kxrPPr6qw3GsNctsHux0519oSOWg00++rjic3Uc7bIeZJXLCki14/gGsr66y0BYzIyo4gmMwzKee894iKdgfSi2LYJw4z7NkVQpjkCzGAdD7J1nferTG4drmFNtIzMigSYEwOdYe9h2sMbdwgMNdJIggRqBXT0GbuQcJO2n9aOfrsCjJSiqTX0s0relnVaYbj202PL+i0HYKjPpbcggWk1gas+wIMQpA3A/jWdmuV6FHDpXg0lv0tvAAZE87n/ANlcrN0qVBS8FrebpeC/ZFMR9abeaTPYvuUA/CmodRVVsP1H3m6Td5+NS4M9MVBebpt+sfiamwL/ACi94pPgFyS8LwLYi6llIDOYk7Ablj3AE+FewcG9HMLhwFWyrsB0rjgFmJGpGbQDfQV5t6BPlxatpojb8pgT5E167YtBjJJbQecknUeHlVxQMpPSDALdtmUhlnLrHLaQNj+B3Aryfi2MKqUOhVNGPtdEyrb7iACeeU9de1Y+2NQJH599eJcYwxNx0yw2quTM65jEdw94rKS+I1i/hPVcPde/h0a4uUvbGdXgw0QwIG/ORpvWUv3XwDtbYs2FuSFAk+rfcZQeU6xzE8111HArrtbYT84H6Wjojcu0sPClxPhtvEW2t3NiJkDUEbETzGv5mrq0Rqo879LbRuvhrI9lodSDOY3HAZxHIKMoPMz2TcYfhxsrkSMuxBEgjXcHQ1Q8KQri0W68hLjW1MzrbL9ETqFzEsO4VvsTaAFOKpUKTt2ZPi2Ja3bB9WHQQGtnVezLOq9hXYgAaGAJhkVwHtHMh7pU7w2vv5we0C94nYDoyxEj38j51kvQ3GNavshzFHUqFOqx/SAFTp7OnYR21E4Wi8WTS9zS4ezpuY8Nhvz5kiiVsz+R5b0RiLyIBlHQ3kbgkmFPXvoedK1jF5N5gj4GvNyaoumj18WiStD7GFn8r/qq4wfCiY0J/d/1UHYx8ctOwT8GrS8M4msCTHgfxrC7fxOgzTnGNxQNiuEsqkhZgbSAfDlVI9rPKjoN1NlbY67Nr7q3GMx6IhYkR51h8TxNWujL1geyeZj6VGZRTqLtepn0k8uRO19Sp4ihVLikyQjagR808pPxozFW4y/qioOMmRdP1W+xRnEWkp+qK89qsckvJ3p/Gv2KzB3y6sSAIZ1EdSuyAntOWfGhOA+w/wDfXf8AqNReDslFIMas7adTOzjxhhQnAfYf++vf9RqqWnTPTxa/slXqjq5pjvRsfzQn/wBRf+K0Nw0fz/Ff3Nv7WHoz0cH8z/8Ak3/itCcOEY3FNzKWk8GCOT3yi+ZrsySUcuRv5f8ARywi5Y8aXzBd7Flb1u1Ah1dieYyZYjzqC9/zlv8AuX+2tGXMIrXFuknMgZQNIhomdJ5ddU+GxbXOIOpAAt23CxMkFrftSd+lyrlwxTTcfSLv+f8Ah05ZOLSfrJUTcU4w1q/btZVKvllmJGXM5U9mgE0D6bXFaymVgZeRBBkBXBIjlOlEcUwC38YiOWAWzn6MAytyADIOmtCelOHFq1ZAkqrOusT0+nyEaZT7q7OmhiUsdbOr/c5OollcZ3ur+xd4jFG1hvWgAlbamDsdB1VicReOKui4wyl2VIXUD2VnXU77Vr+LH+ZP/dj4CsTgjoB1uNeY2/GtvZkI1KVb21f6GPtCUrjG9qTJL1vK7LM5WZZGxgkSPKmA1Y3rKC3iSBql9EViNQs3AwPf0fIVX5q9ROzzmqG0q7NKmIsrdwAjMMw6tQR2gz7q5fVQ0rOXkd5/PVvUU6eNJXjtHVSoBNqxPafjT8MYYE/nUVwIW9mT2Dcd8fGm2gQ0H30x0Wvow7LibcGJJB7oJ+IFe14W4IEEmVER1See3VXgmBvFLiMORHv0Pxr1rhnH0LWkM9Nio1jXIxHvA91UnQqsO4riUCszwsTuR9xrzbGcFvYi497DxdQkLq6qRGhWWImc0V6XisVbthXcSkQZXNCZSzN1z+FVXF8clq5atZpQ2zOWPZBOVhHPQx1mKlxt2NS2oyHE+M3sDlturWsygAs2XMLYCypUaidI6oJ3qoxvpk1y2VW5dVusMdQJIliSc0wNABvXo3FcZbuIi3MrEZtgII06Q7DoY7ao2wHDWBLWbYP6i6nvArOeRRdG2PE5Kw3hWCwDKhYBroAZndmLM8dJyZ1Pfyirq5btPpm7ta874natWzOHuxHzWJI7gdx7/CgcPx9wcpbXqn3isFOb4Ol44I3+K4WpO89hJg+WvkazeN4cLatct21GSQsbiDAAJOpgxUOH9Iz86j7/ABlGVYOq6k9UiJ7TuB2mtsMpO7OfPCMaoEwPGNSly2sjRgecbnLA5Cd+Rp990z/Jh8u8OBpOnRM9Iae/zynHcUFuB1YZjnJjkdIHhnI8KlwmOJFsqCGctMc4uWAR3aNVZYKSJw5HGWxrbM1PjMYUtjtI1HZr91Vy9evjyrvED8hOujA+Zj7686WO2e3DKlTYZ+nswguQCOeo8eqqy1ePrE1+ev2hQTY0FYqThxD3EnrnxUEj3io7ShFyaOmHUKml6l/xL2Lms9BvsmjcaB0YM9EUBjiTbed8jfZNSpi0uAFDIXonQiD1aivNS1YpteUZSdZYr9AThtm7iPWFcTbt5bjWwpsM5HTKoc3rACTHVFGJwtMKq2lcvoWZzEs7OxcwNtdI5RzNUGAxr22uBTp69mgiRmS4xU6jTwq8sYg3BmIEy20ndi53PWxrt6uChhpKuPQ5Onblltu+Qf0dH8xB/wDVYj4rQfC/+exg/wD4IfHPhxPfBI8T11aYWyLdv1SAhczPB1OZozGfAaVVcGOfHYzLr8gm2vsvh83lB8jUxmsuTJJLbSEodrHjTe+r+yXFOwxVhQTlK3SRJgkZYJGximsoXGqQAC1l80ACemm/XsKPfCqzrcIOZAwUzpDRm057Cq2/eUY62pYT6pxE8yykDvIU6VzYne0fSLT/AJOnIkt36yVFdx64y47D5WInIDBIkG6ZUxuD1VJ6cf0Kfr/9j1c4nhdu5cS66kukZSCQOi2YaDfWqT05ceqRZ1zzHOAjAnzI866OnyKeTElylTMM8HHHkb4fBYcV/wCSf+7X4LWFwzEAEbhpHeMpFejLh1uWVtsJVkUGNNIHOsTxyzbsXXtqpC5VIJJME5GJ17iPGun2ZlXx4/W2zm9oY38M/SkiZr7NaxZ0h7tu4wg7tcJmY0EnrFVc0ZibT22xFtzkZWUOhnpMraRpBiS0mNNt6Cr1Yo81sU0q7NKmIOY9gFMpPcJ3NJG3kTp3UwJLdwqQRv8AnSpXckhpLDrO/wCqe6hz76kLqNs0cwY8xFJjRGRVrZx8IHk57Y6GvzuvvgAVWuNYma5ZHv0jvoe6CLpmnwXpOWXK/ssCw+qd2A8z5mqPH8YZ7iSxzIiJPamoI7Q3wquwwzOEIOxnsWIEHtJA8alOGyEnSZmSs/Ex5zSRUgjE8aeFSdADHYJEDw28KrTj3PP30nwZMnl36d1OTCjnSeNN2yllcVSAcTj2GkaxP5FMv4ZmbMWbsiBHlXeJLFxdI6J+NHYYyoPYPgKpRS4Ic3Lkgwr3AY9vqnl31Lce+W9WIzA8twSNOyYq04YEnVczE6ACah4fcDXLtwc2IHcNJ+FD2BbvcpLuFuFtVYmeqe8yNK1XBsLkyu5gqIVAJiSTmJ5t0j7uoVKh9w95/Jp7GKylNtUbQgouy1S+OtvL+NQcYxIFrKBoWEzyGp08QKZhllSefLzA++ljLWZGUanl3j8++sdKs6NboprdxfnLoerQj8a7aUMyo0lSygwSsjMOY1FC5o0O45GieGoXuIB9IE9gBBJraUV6GXdb2NhcwypbNu2CFClVBJbcGJY6nU86q+H8GR2b9Jttl0KhXK6ydZRp25dtQ8Qxd+xcZlGdGOz9GTE9BuUba8gPEb/ii7/Zh+//ALa8tYOpxybxpNN3ydks2CcUptppVwFrwprbFbSNkB6JZlLGdyTm65q94Xg7T2ntYtZQtmAzPIIAh1yGFO4n2okGQay//FF3+zD/ABP9tdHpPd/sw/xP9tX/AOy70r7olvparU/sar/hnhXVc/xL/wCNWXBcPgcHm/R1yl4zMc7sQNhLzA7BWGT0ivnbCj/EA+K0b+lY7+wN/iL+FGrreNK+6I09J8z+zL3inCMDfdrrq2dvaKNcQE9eVSBPbGtU+L9HMKilrFs+sBUrmdz85ZPTMTE71EcZjv7Af8RfwqG9xbFoCz4IgDcm4NPdST6z5V90GnpPmf8AJDiOCM/Sa2S/M+sImBpoGjq1oLFejb+rUpal5GabnLIpO7x7WYUV/wATXv7L/n/20xvSq4DBwwH/ALn+2tL61flRKj0fGplrxvoYNwdCEUePREDxrBIoKOxEkAwST1oOR7TVpxfil7EQrKEQGcoI1PWxJ1oIYZgjDo6rvmXeVPX1Ct+iwPDjerluzHq8yyzWnhKg3iob1uIYbTbDftIpHvX4VWirnEuC+IMiLiWwunzkVZkch21WDDt1j/N+FdcXsc0luQzXam/RG7Pf+FKnYjsmlmqW7dU7LFRyKYrHZqdmpikSOryqW46nZY8SfjQMaGrufqGu/lzrhXSm2rmRgwMQRr2c/dSY0RYPERiraNsXa22kzmyhf80Gta6qJREBMQT80a+RNUHD8Kv8qIsaMzEcoPq2E9jAjN4itmOHFGhVBA5ez5cveKFwgfLKH9DTmE8gKHdFGwFaa7atr7YyMfprl/z+yfOg8VhoGhmmIwPG/wClXsXn2sfwovApNtf1V+AoX0gM327FUdfIty76JwWltf1R8KoC74IuUlhEgE+Cgn7qqeAYdioMiOYLBSTpJ1O2m9XXo1be5cKgQuRiSdyMpEKOvXc++q+06qAu0Dn7/vrOb2ouC3ssEtP9Enc6a/CuRrUKODseraiMPqQOusDZFlhgFDT81R57/gPCg8RjltwGzSRyAP30XevaECPaiYGsa/hVFxt5KdzfEUoK3uVKVIFtlIWUc75oMA9Uaacqt+Ef0nrEtOEy5dwZMjXpEdXKqVGOm8aVsMD/AEan6i/AVeTZGcN2LjSBrLEjUQQerUA+6srNajirfJP3D3EVlJoxcBke5JNOU1FNOBq6Is1vA+C2rlpLjl5YsDDADRmHV1AVqlAWFGwAA7gABWe9DnmywJ0Fwx2dFTp4k+daAvXPPmjRcAOP4patSHcZvojpN5DbxislxDjD3WyDoozARAJylhuTz7qAuXSxLHdiSe8mTUFxq0jBIhyNL+gWAILeeh+1UbYbC89f2v8AzVBBPzz4Ko+6mMx+m/fIHwFT2pv8xPch4NCuGw3K2p/cPxSuraw+vyaHvVN/BdazZY/1j+LnXyFcMRBZzr9NvHY0vd5/MHej4NWiYcx8jb/cHhtThdtiYt2hzjb4GsebQ55j3s3408WLcewD36/Gj3WXrJifUR8GwXFWQANNhtEbcqVY420/q02HzR1V2j3T/Jj95XylZHbTyahmnE12mQ9X1p81ADTw1A0Sk01xypmauqakZq8PhrYxNrGE5FW0hGhyl2SGDNsAAWOu58RWqTGo3TBBnqrGcHD3LLImIa06FTbzaBlObNkaRswIPeKAv4fE2iWzFDzZRCnvy6HxFKLG/Jv7+KO3LzmqfFoNgoXuOTxjasuvH8Tb1dFuL1oYPmNPdRFr0utNo6uneMw7dV/CrEUXEr5W/dByNqBJRWkZRHtL2x4URg59UuoiOqTpQnG71q4/rLbgk6MMuX9Vu3qPcKOwuIRUjOoA5kgDs7/CgC69GcWEvLzzQpJ7dIAqF71tWa22cZWIIOuoMdXZVbheJqX+TJZwCcwUgKBv7UGduXOn2MS923dS603LYS4jOZZkYqjoTz1KtHLpVEo2NSotLTWPpkdsLp76Pt2LO3rU8UHxAFZjDgZhO0/xo17jFoDEaCNSKycC1JmtwvC7bKQLiGdukwj94mqH0wwItG1Eah5gzsV7NN6rUvMGJDGfzv11DxPFM+TMQYmIAXq6gOqlGFOwlJtESnbuH8K2WHt5bSHNMpbJEEESFOx3HaNKxS7A9g91bReJuLFq1AKm1b1OpHRGgnQeFPIrQ8bpg+Pf5N+775rNA1b8WuEW9DEtB7RB091UimnjWwZHuSzXRTKcKZJs/Qxvkn/vP+xavmes36Ht8ncH1x9mr+a55fiZtHgwtu2DZdo6SvbAPYy3ZHmq+VSYbCq9tydwCQerIA3vmDUaIPVXWgSr24PMA+skeMDyonh5+TuD6tz3+qH31uYgTJBn1lsb/wD7E8tDQmIeGGqkfVII5cxTnReoeQqJnGYD7veK0o514H5166OwHEhbDANrplMTpMMvkTVeX1Jpy3Nf4T30NCuiXEYsOxYkme/v+NRm8Nsp8j+FNnSe786dgrjtJ389aZLJNf6t/wB1v9NcqOaVAFcbTfk1wqaRphNPc22HCnKKjmnKaY0PikAR5H4U2a6Dv3feKkZdcMxhNh7dy2jIhGTQrcVnzM0ODrqJgzudKqcTxC4is2Z52WW1k6zHzhoQeWoq39QVw1mRGc3Ljdc5siL5JP7dVd9LbkhlJK9pHw3ooLdAyYgP0iMpI1gAT2iIpl3DqdiDO3f1QYNLFYFW1Vo7CSR570HkdJOvPXcTsCD76oVkUE7IB2nX3bU8WCSZGkasdANdNT3bUNczk6kmpFuEyWJMRAaTqSOvsmgQVw/FeqZmUFiUdPor00ZMx5tE5gNNQKM4djWytbJnMCf2gy6+KhRHZQVjFKDBVCup9lQfBgAfCasbVhEb1lu6meBC/SmA2WdjEmdtKT4GuQjD+0PzyorMS5PZ91XGO4dctW1vKwuWiJLhAch06LxIHtLrPON9KpmxgImV35D7orJ34NNvI1aHxfzfH7quMFi0A6XquftKpPjIoXjOKS4qZMmhaci5fo76CaSbvgHVclYOVX9i0ciE3HPRWBMBRGiiOqd6p7OGBEm4q9h3q3wGItmA1xQqqQJlQxVYWAdZJj305BCr3I+JoAgMt7Q3Ynkes1VqaMxxBEi5m1HRkEDflQS9sxTjwEuSQGnA127bCwQwIImOY76iBpgbH0RU+rduReB4KJ+Iq+BrEcE4yLAdWVmDQQAYAImTB69PKrVPSq3t6t/MVzyhJybNYyVFG1wqHQHRmE6fRLR8TTUxjIrBYgggyOsoTz+oPfTb56bfrH40O50rdIxbCCqf1yeTn/tqJkTMAtwN3BwD3SKjL0kO1XRzt0S4e0rI75yuSCRlmQxjTpDYx51DmUHViP2R4/OqSzcAW8PqAjwuJ9zVdcEt4VcFnZVfEvcHtywVRBHQg9HKTyPPqqZOi4qzPC4skKx7dIPx2rqsOZOgmYGgGsmW95q/4pwC4bN+/AUWmQocpX1gcqCVn5s6jTY+VNwRLTYq2L39ECGYTAP0Q3ZMUJ7WNx3B/wBIXrf9z+NKr/ial7ztYtKLRY5YTkNJ9g7kE+NKp1/oV20ZHMfzFNmlNcmtiDs06m0poGOp1tCzBRuxAHeTAqOaL4Us3kH1h/CgZpeLsAVRfZtoqKOwAa9s9dVb4a2V9sFomAQfCJBmrHjNwSYB3MHrAqhvk6jMR3GPdQJMGdO1vMn766iDkVPcQD5EihrjOuxnnUf6U30vPWgLH4yzl1BBnq76GImu3Hkb9Q+NNUdtAiF7ZGvLnpqKVkwQRt/GiU6qGv28u1ABNvHPbbos0c1k5W61ZdiCABR5I3GxgjY6HUSRz5HtBqkvmTP511q6FtRbtlZ6VsNryOd0YD9pCe4ikxocDXQaYBTqRQ4NXQaaKdQA+TTw1MNdWkBIjag9omkKYtdBoAeacajmpKCkS3LgJJ6yT76jd6ItYa45hEJJ2AjvoS8pBIO40I6iNCKSEyb5ONbjD/2yfvpnQJgOYAJlkKyY2A11PlUWbSkxEaz2R16b1RixBx05O4/7lP3U/A8RuWWzIQYEDUaDeNdxOvWOuhb5B3IpgjrFDSfJSdFpjuOXLy5DlRJnIhhZ11OusVXZo1BE+YI6iOYpsr1jzroy9YpKKQNstbXpBfAAUiBoOkuw0HtLPnXKroX8mlS0R8BrYDNKa5SrQY4GlNdpUAKRR/Bz8oG6tfGRSpUAWHFsRyHKqa5iBSpUADPemgXEnSlSoESvhyqhuUSO3kaaKVKgGTI4066ExFwMdNh2RSpUIBW1zHKKtLZIVUmQoIHiS3xJpUqTGSZq6K5SpDHg12lSoGSMdKZNKlSGx1OU0qVAjuauzXaVAFhguJm2wZQJAgTMaiOqgcTdzOzEQWYnTtM0qVSinwMU6CuO3xpUqsxYLfNRCu0qoaHACpFy9v58aVKgDvrV6j5fxpUqVID/2Q=="
                  onClick={"url"}
                />
                <Avatar
                  name="Freefire"
                  src="https://play-lh.googleusercontent.com/4RvFMe4VmXWyrruxkfGMSBR-hGYsz8X-CK5rW-667wDAU-zuaxePgm_sXW-9YI-MrY15"
                />
                <Avatar
                  name="Farfire"
                  src="https://play-lh.googleusercontent.com/63mz71Bc4rPogJZ8vJ8_nVjzXVWAWDms9i30iU1--iX1ryYu8QURpvEv0gc0N6KYBA"
                />
                <Avatar
                  name="Mini Miltia"
                  src="https://play-lh.googleusercontent.com/ffGx9o8K6RI7DJuADt95JiyhhU74jqbvm1h8QRb6yoI67bL17Q23xVmZw79N-u9URHA"
                />
              </AvatarGroup>
              <Text size={"lg"} as={"b"}>
                Click on the desired icon to download the game
              </Text>
            </TabPanel>

            <TabPanel>
              <Text textAlign="left" fontSize={"19px"}>
                <Text textAlign="left" fontSize={"19px"}>
                  Music has been my unwavering companion through the highs and
                  lows of life. Its melodies resonate with my emotions,
                  comforting me in times of solitude and celebrating alongside
                  me in moments of joy. From the rhythm that beats in sync with
                  my heart to the lyrics that articulate feelings I struggle to
                  express, music transcends words and becomes my closest
                  confidant. It's in the harmonies and melodies where I find
                  solace, understanding, and a connection that words often fail
                  to provide. Indeed, music is not just an art form but my
                  steadfast and unwavering best friend.
                </Text>
                <Box my={"30px"} minW={"100%"} display={"flex"}>
                  <Popover
                    initialFocusRef={initialFocusRef}
                    placement="bottom"
                    closeOnBlur={false}
                  >
                    <PopoverTrigger>
                      <Button
                        colorScheme="teal"
                        variant="solid"
                        leftIcon={<IoMdEye />}
                      >
                        Dooriyan
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      color="white"
                      bg="blue.800"
                      borderColor="blue.800"
                    >
                      <PopoverHeader pt={4} fontWeight="bold" border="0">
                        Dooriyan song by Dino James
                      </PopoverHeader>
                      <PopoverArrow bg="green.400" />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Image
                          src="https://1.bp.blogspot.com/-s2kBtQRDxeE/XetbL9LWSAI/AAAAAAAABdc/mbkbf2Rh3Ekyr_k751-tyUUp9cM7X47zQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Dooriyan.jpg"
                          alt="Dooriyan Photo"
                        />
                      </PopoverBody>
                      <PopoverFooter
                        border="0"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        pb={4}
                      >
                        <Box fontSize="sm">Earphone Recomended</Box>
                        <ButtonGroup size="sm" gap={"1px"}>
                          <Button
                            colorScheme="green"
                            leftIcon={<ViewIcon />}
                            onClick={handleButtonClick}
                          >
                            Play Music
                          </Button>
                          <Button
                            colorScheme="blue"
                            leftIcon={<LinkIcon />}
                            ref={initialFocusRef}
                          >
                            Share
                          </Button>
                        </ButtonGroup>
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                  <Spacer />
                  <Popover
                    initialFocusRef={initialFocusRef}
                    placement="bottom"
                    closeOnBlur={false}
                  >
                    <PopoverTrigger>
                      <Button
                        colorScheme="teal"
                        variant="solid"
                        leftIcon={<IoMdEye />}
                      >
                        Titliaan
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      color="white"
                      bg="blue.800"
                      borderColor="blue.800"
                    >
                      <PopoverHeader pt={4} fontWeight="bold" border="0">
                        Titliaan song by Avvy Sra
                      </PopoverHeader>
                      <PopoverArrow bg="green.400" />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Image
                          src="https://www.quirkybyte.com/wp-content/uploads/2020/12/3-24-780x470.jpg"
                          alt="Titliaan Photo"
                        />
                      </PopoverBody>
                      <PopoverFooter
                        border="0"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        pb={4}
                      >
                        <Box fontSize="sm">Earphone Recomended</Box>
                        <ButtonGroup size="sm" gap={"1px"}>
                          <Button
                            colorScheme="green"
                            leftIcon={<ViewIcon />}
                            onClick={handleButtonClickTitliaan}
                          >
                            Play Music
                          </Button>
                          <Button
                            colorScheme="blue"
                            leftIcon={<LinkIcon />}
                            ref={initialFocusRef}
                          >
                            Share
                          </Button>
                        </ButtonGroup>
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                  <Spacer />
                  <Popover
                    initialFocusRef={initialFocusRef}
                    placement="bottom"
                    closeOnBlur={false}
                  >
                    <PopoverTrigger>
                      <Button
                        colorScheme="teal"
                        variant="solid"
                        leftIcon={<IoMdEye />}
                      >
                        Champa
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      color="white"
                      bg="blue.800"
                      borderColor="blue.800"
                    >
                      <PopoverHeader pt={4} fontWeight="bold" border="0">
                        Champa song by Bhupu Pandey
                      </PopoverHeader>
                      <PopoverArrow bg="green.400" />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Image
                          src="https://i.ytimg.com/vi/_cW8X9FE4iM/hqdefault.jpg?v=641004ed"
                          alt="Champa Photo"
                        />
                      </PopoverBody>
                      <PopoverFooter
                        border="0"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        pb={4}
                      >
                        <Box fontSize="sm">Earphone Recomended</Box>
                        <ButtonGroup size="sm" gap={"1px"}>
                          <Button
                            colorScheme="green"
                            leftIcon={<ViewIcon />}
                            onClick={handleButtonClickchampa}
                          >
                            Play Music
                          </Button>
                          <Button
                            colorScheme="blue"
                            leftIcon={<LinkIcon />}
                            ref={initialFocusRef}
                          >
                            Share
                          </Button>
                        </ButtonGroup>
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                  <Spacer />
                  <Popover
                    initialFocusRef={initialFocusRef}
                    placement="bottom"
                    closeOnBlur={false}
                  >
                    <PopoverTrigger>
                      <Button
                        colorScheme="teal"
                        variant="solid"
                        leftIcon={<IoMdEye />}
                      >
                        スパカル
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      color="white"
                      bg="blue.800"
                      borderColor="blue.800"
                    >
                      <PopoverHeader pt={4} fontWeight="bold" border="0">
                        君の名前はからのスパカル
                      </PopoverHeader>
                      <PopoverArrow bg="green.400" />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Image
                          src="https://4.bp.blogspot.com/-Ty-zgPI1O7w/WZgx-zjScII/AAAAAAAAFnY/vT2NFKFqjtgeuewoxuhWd2r_fTmNQNTEQCLcBGAs/s1600/kiminonyawa.jpg"
                          alt="スパカル Photo"
                        />
                      </PopoverBody>
                      <PopoverFooter
                        border="0"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        pb={4}
                      >
                        <Box fontSize="sm">Earphone Recomended</Box>
                        <ButtonGroup size="sm" gap={"1px"}>
                          <Button
                            colorScheme="green"
                            leftIcon={<ViewIcon />}
                            onClick={handleButtonClickjpn}
                          >
                            Play Music
                          </Button>
                          <Button
                            colorScheme="blue"
                            leftIcon={<LinkIcon />}
                            ref={initialFocusRef}
                          >
                            Share
                          </Button>
                        </ButtonGroup>
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                </Box>
                <Text size={"lg"} textAlign={"center"}>
                  There are the best picks for you!
                </Text>
              </Text>
            </TabPanel>
            <TabPanel>
              <Text>
                When boredom sets in, there's an unexpected joy I find in
                tidying up my room. There's something oddly satisfying about
                dusting shelves, arranging items meticulously, and restoring
                order within the space that brings me a sense of calm. As odd as
                it may seem, the act of cleaning becomes a refuge when boredom
                strikes, transforming the mundane task into a therapeutic escape
                that leaves me feeling refreshed and revitalized.
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Container>
  );
}

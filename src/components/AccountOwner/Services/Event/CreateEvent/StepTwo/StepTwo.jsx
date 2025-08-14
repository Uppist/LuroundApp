/** @format */

import React, { useEffect, useState } from "react";
import styles from "../../Event.module.css";
import { useNavigate } from "react-router-dom";
import Regular from "./Regular";
import arrow from "../../../../../elements/arrow.svg";
import Vip from "./Vip";
import axios from "axios";
import { set } from "@cloudinary/url-gen/actions/variable";

export default function StepTwo({ eventService, setEventService }) {
  const [isTicket, setIsTicket] = useState(false);
  const [isRegularVirtual, setIsRegularVirtual] = useState(false);
  const [isVipVirtual, setIsVipVirtual] = useState(false);
  const [isRegularPerson, setIsRegularPerson] = useState(false);
  const [isVipPerson, setIsVipPerson] = useState(false);
  const [isRegular, setIsRegular] = useState(false);
  const [isVip, setIsVip] = useState(false);

  const [pricing_model, setPricingModel] = useState("Free");

  const [tickets, setTickets] = useState({
    regular: {
      name: "",
      description: "",
      perks: [],
      amount: "",
      quantity: 0,
      ticket_type: "Regular",
      virtual_link: "",
      event_type: [],
      ticket_id: "N/A",
    },
    vip: {
      name: "",
      description: "",
      perks: [],
      amount: "",
      quantity: 0,
      ticket_type: "VIP",
      virtual_link: "",
      event_type: [],
      ticket_id: "N/A",
    },
  });

  function toggleVirtual(e, ticketType, type) {
    if (ticketType === "regular") setIsRegularVirtual((prev) => !prev);
    if (ticketType === "vip") setIsVipVirtual((prev) => !prev);

    setTickets((prev) => {
      const key = ticketType;
      const updatedEventTypes = prev[key].event_type.includes(type)
        ? prev[key].event_type.filter((t) => t !== type)
        : [...prev[key].event_type, type];

      return {
        ...prev,
        [key]: { ...prev[key], event_type: updatedEventTypes },
      };
    });
  }

  function togglePerson(e, ticketType, type) {
    if (ticketType === "regular") setIsRegularPerson((prev) => !prev);
    if (ticketType === "vip") setIsVipPerson((prev) => !prev);

    setTickets((prev) => {
      const key = ticketType;
      const updatedEventTypes = prev[key].event_type.includes(type)
        ? prev[key].event_type.filter((t) => t !== type)
        : [...prev[key].event_type, type];

      return {
        ...prev,
        [key]: { ...prev[key], event_type: updatedEventTypes },
      };
    });
  }

  function handleTicketTier(e, type) {
    const ticketKey = type.toLowerCase();
    const { name, value } = e.target;

    setTickets((prev) => ({
      ...prev,
      [ticketKey]: {
        ...prev[ticketKey],
        [name]:
          name === "perks"
            ? value.trim() === ""
              ? []
              : value
                  .split(",")
                  .map((item) => item.trim())
                  .filter(Boolean)
            : name === "amount"
            ? value.trim() === ""
              ? 0
              : value
            : value,
        ticket_type: type,
      },
    }));
  }

  function handleFree() {
    setIsTicket(false);
    setTickets((prev) => ({
      ...prev,
    }));
    setPricingModel("Free");
  }

  function handleTicket() {
    setIsTicket(true);
    setTickets((prev) => ({
      ...prev,
    }));
    setPricingModel("Ticket Tier");
  }

  const navigate = useNavigate();

  function handleRegular() {
    setIsRegular((prev) => {
      const newState = !prev;
      if (!newState) setIsRegularVirtual(false);
      return newState;
    });
    setIsVip(false);
  }

  function handleVip() {
    setIsVip((prev) => {
      const newState = !prev;
      if (!newState) setIsVipVirtual(false);
      return newState;
    });
    setIsRegular(false);
  }

  function Done() {
    const toSave = [];
    if (toSave.length === 0) {
      toSave.push({
        ...tickets.regular,
        name: pricing_model === "Free" ? "Free Ticket" : tickets.regular.name,
        description:
          pricing_model === "Free"
            ? "Free entry ticket"
            : tickets.regular.description,
        amount: 0,
        // ticket_type: "Regular",
      });
    }

    if (tickets.regular.name || tickets.regular.amount) {
      toSave.push({
        ...tickets.regular,
        pricing_model,
      });
    }
    if (tickets.vip.name || tickets.vip.amount) {
      toSave.push({
        ...tickets.vip,
        pricing_model,
      });
    }

    if (toSave.length === 0) {
      toSave.push({
        ...tickets.regular,
        amount: 0,
        ticket_type: "Regular",
      });
    }
    const dataToSend = {
      ...eventService,
      tickets: toSave,
      pricing_model,
    };

    console.log("Saving tickets:", toSave);
    setEventService(dataToSend);

    const token = localStorage.getItem("Token");
    axios
      .post("https://api.luround.com/v1/services/create", dataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        console.log("Data sent:", dataToSend);
        navigate("/event", { state: dataToSend });
      })
      .catch((err) => {
        console.error("Error sending data:", err);
      });
    console.log(eventService);
  }
  useEffect(() => {
    if (Object.keys(eventService).length > 0) {
    }
  }, [eventService]);
  return (
    <div className={styles.createservice}>
      <div className={styles.createtimebased}>
        <span>Create an Event</span>
        <div className={styles.eventtype}>
          <span>Pricing model</span>
          <div className={styles.eventcheckbox}>
            <div className={styles.checkvirtual}>
              <input
                name='pricing'
                type='radio'
                onChange={handleFree}
                checked={!isTicket}
              />
              <label>Free</label>
            </div>

            <div className={styles.checkinperson}>
              <input
                name='pricing'
                type='radio'
                onChange={handleTicket}
                checked={isTicket}
              />
              <label>Ticket Tiers</label>
            </div>

            {isTicket && (
              <>
                <div className={styles.regular} onClick={handleRegular}>
                  {isRegular ? (
                    <Regular
                      Virtual={(e) => toggleVirtual(e, "regular", "Online")}
                      isRegularPerson={isRegularPerson}
                      isRegularVirtual={isRegularVirtual}
                      Person={(e) => togglePerson(e, "regular", "Physical")}
                      tickets={tickets}
                      setTickets={setTickets}
                      handleTicketTier={(e) => handleTicketTier(e, "Regular")}
                    />
                  ) : (
                    <>
                      <span>Regular</span>
                      <img src={arrow} alt='' />
                    </>
                  )}
                </div>

                <div className={styles.vip} onClick={handleVip}>
                  {isVip ? (
                    <Vip
                      Virtual={(e) => toggleVirtual(e, "vip", "Online")}
                      isVipPerson={isVipPerson}
                      isVipVirtual={isVipVirtual}
                      Person={(e) => togglePerson(e, "vip", "Physical")}
                      tickets={tickets}
                      setTickets={setTickets}
                      handleTicketTier={(e) => handleTicketTier(e, "Vip")}
                    />
                  ) : (
                    <>
                      <span>Vip</span>
                      <img src={arrow} alt='' />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div className='cancel-done'>
          <button className='cancel-time'>Cancel</button>
          <button className='done-time' onClick={Done}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

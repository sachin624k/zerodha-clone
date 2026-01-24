import React from 'react';
import { FaSearch } from "react-icons/fa";

function Hero() {
    return (
        <div style={{ 
            backgroundColor: "#f7f7f7",
            padding: "50px 0"
        }}>
            <div className="container" style={{ maxWidth: "1200px", position: "relative" }}>
                
                {/* Button top-right */}
                <button style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    padding: "10px 22px",
                    backgroundColor: "#387ed1",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "500"
                }}>
                    My tickets
                </button>

                {/* Heading */}
                <h1 style={{
                    fontWeight: "600",
                    fontSize: "34px",
                    marginBottom: "25px",
                    marginRight: "140px" // space so text doesn’t overlap button
                }}>
                    Support Portal
                </h1>

                {/* Search Input Bar */}
                <div style={{
                    width: "101%",
                    display: "flex",
                    alignItems: "center",
                    padding: "14px 18px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "1px solid #e1e1e1",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
                }}>
                    <FaSearch size={16} style={{ marginRight: "12px", opacity: 0.6 }} />
                    <input 
                        type="text"
                        placeholder="Eg: How do I open my account, How do I activate F&O..."
                        style={{
                            width: "100%",
                            border: "none",
                            outline: "none",
                            fontSize: "15px",
                            color: "#555"
                        }}
                    />
                </div>

            </div>
        </div>
    );
}

export default Hero;

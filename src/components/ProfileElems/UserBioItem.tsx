import React from "react";

interface userBioItemProps {
    fieldName: string
    fieldValue: string
}

export const UserBioItem = ({fieldName, fieldValue}: userBioItemProps) => {
    return (
        <div className="userInfo">
          <p className="secondaryText info">{fieldName}</p>
          <p className="value">{fieldValue}</p>
        </div>
    )
}
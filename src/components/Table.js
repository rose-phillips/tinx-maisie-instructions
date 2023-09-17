const Table = () => {
  const schedule = [
    {
      time: "8:30am",
      activity: "medication",
      extrainfo: "1/4 vitofyllin for tinx",
    },
    {
      time: "8:30am",
      activity: "walk",
      extrainfo: "15mins. Just a short walk for poopin'",
    },
    {
      time: "9am",
      activity: "food",
      extrainfo: "1/2 pouch each plus 2 x steroids (prednicare) for Tinx",
    },

    {
      time: "4:30pm",
      activity: "walk",
      extrainfo: "about 30mins",
    },

    {
      time: "5:30pm",
      activity: "food",
      extrainfo: "1/2 pouch each plus 2 x steroids (prednicare) for Tinx",
    },

    {
      time: "8:30pm",
      activity: "medication",
      extrainfo: "1/4 vitofyllin for tinx",
    },
    {
      time: "10:30pm",
      activity: "walk",
      extrainfo:
        "around the block for one last wee before bed. sometimes a poo as well!",
    },
  ];

  return (
    <div className="m-4 d-flex justify-content-center">
      <table
        style={{
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <thead id="table-head">
          <th className="py-3 time">TIME</th>
          <th className="py-3 activity">ACTIVITY</th>
          <th className="py-3 extra-info">EXTRA INFO</th>
        </thead>
        <tbody>
          {schedule.map((activity) => {
            return (
              <tr style={{ borderBottom: "1px solid slategrey" }}>
                <td>{activity.time}</td>
                <td>{activity.activity}</td>
                <td>{activity.extrainfo}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="vet-info">
              Vet: Beechwood Veterinary Group, 430 Dewsbury Rd, Beeston, Leeds
              LS11 7LJ
              <br></br>
              After hours vet: Leeds Emergency Vets, 52 Commercial Street,
              Morley, Leeds, LS27 8AG
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;

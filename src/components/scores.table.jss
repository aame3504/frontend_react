<table border="1">
      <thead>
        <tr>
          {
            Object.keys(scores[0]).map((key) => (
              <th key={key}>{key}</th>
            ))
          }
        </tr>
      </thead>

      <tbody>
        {
          scores.map((item, idx) => (
            <tr key={idx}>
              {
                Object.values(item).map((value, i) => (
                  <td key={i}>{value}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
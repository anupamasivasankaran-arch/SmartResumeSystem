function JobCategories() {

    return (

        <div
            style={{
                padding: "40px",
                color: "white",
            }}
        >

            <h1>Job Categories</h1>

            <table
                style={{
                    width: "100%",
                    marginTop: "20px",
                    borderCollapse: "collapse",
                }}
            >

                <thead>

                    <tr>

                        <th>Category</th>
                        <th>Jobs</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td>Frontend Development</td>
                        <td>24</td>
                        <td>Active</td>
                    </tr>

                    <tr>
                        <td>UI/UX Design</td>
                        <td>18</td>
                        <td>Active</td>
                    </tr>

                    <tr>
                        <td>Python Development</td>
                        <td>12</td>
                        <td>Inactive</td>
                    </tr>

                </tbody>

            </table>

        </div>
    );
}

export default JobCategories;
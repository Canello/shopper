import { useState } from "react";
import { Table } from "./components/Table/Table.component";
import { Form } from "./components/Form/Form.component";

function App() {
    const [validationInfo, setValidationInfo] = useState<ValidationInfo | null>(
        null
    );

    return (
        <div className="App">
            <main>
                <Form setValidationInfo={setValidationInfo} />
                <Table productInfos={validationInfo?.product_infos} />
            </main>
        </div>
    );
}

export default App;

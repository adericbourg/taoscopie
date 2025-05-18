import { Alert } from "react-bootstrap";

export default function ValidationResult({ validationErrors }: { validationErrors: string[] }) {
    return (
        <>
            {validationErrors && validationErrors.length > 0 && (
                <Alert variant="danger">
                    <ul>
                        {validationErrors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </Alert>
            )}
        </>
    );
}

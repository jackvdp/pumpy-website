export default function MainWrapper({ children }) {
    return (
        <main style={{
            position: 'relative',
            zIndex: 1,
            minHeight: '100vh',
        }}>
            {children}
        </main>
    );
}
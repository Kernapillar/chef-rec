import ChefIcon from "./assets/chef-icon.png"

export default function Header() {
    return (
        <header className="header-container">
            <img src={ChefIcon} alt="chef-guy" className="header-icon" />
            <p className="header-title">Chef Reque</p>
        </header>
    ) 
}
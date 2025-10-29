def predict_career(skill_level, interest, goal=""):
    interest = interest.strip().lower()
    goal = goal.strip().lower()

    # --- CODING / DEVELOPMENT ---
    if skill_level >= 9 and "coding" in interest:
        return "Software Architect"
    elif skill_level >= 8 and "coding" in interest:
        return "Full Stack Developer"

    # --- AI / MACHINE LEARNING ---
    elif skill_level >= 8 and ("ai" in interest or "machine" in interest):
        return "Machine Learning Scientist"
    elif skill_level >= 7 and ("ai" in interest or "machine" in interest):
        return "AI Engineer"

    # --- DATA SCIENCE ---
    elif skill_level >= 8 and "data" in interest:
        return "Data Scientist"
    elif skill_level >= 6 and "data" in interest:
        return "Data Analyst"

    # --- CYBERSECURITY ---
    elif skill_level >= 8 and "cyber" in interest:
        return "Cybersecurity Engineer"
    elif skill_level >= 7 and "cyber" in interest:
        return "Security Analyst"

    # --- CLOUD COMPUTING ---
    elif skill_level >= 9 and "cloud" in interest:
        return "Cloud Solutions Architect"
    elif skill_level >= 8 and "cloud" in interest:
        return "Cloud Engineer"

    # --- DESIGN ---
    elif skill_level >= 8 and "design" in interest:
        return "UI/UX Designer"
    elif skill_level >= 5 and "design" in interest:
        return "Graphic Designer"

    # --- TEACHING / EDUCATION ---
    elif skill_level >= 9 and ("teach" in interest or "education" in interest):
        return "Educational Consultant"
    elif skill_level >= 6 and ("teach" in interest or "education" in interest):
        return "Lecturer"

    # --- MANAGEMENT ---
    elif skill_level >= 8 and "management" in interest:
        return "Product Manager"
    elif skill_level >= 6 and "management" in interest:
        return "Project Manager"

    # --- FINANCE ---
    elif skill_level >= 8 and "finance" in interest:
        return "Investment Banker"
    elif skill_level >= 6 and "finance" in interest:
        return "Financial Analyst"

    # --- MARKETING ---
    elif skill_level >= 8 and "marketing" in interest:
        return "Marketing Strategist"
    elif skill_level >= 5 and "marketing" in interest:
        return "Digital Marketer"

    # --- COMMUNICATION ---
    elif skill_level >= 8 and "communication" in interest:
        return "Public Relations Officer"
    elif skill_level >= 5 and "communication" in interest:
        return "Content Writer"

    # --- RESEARCH ---
    elif skill_level >= 7 and "research" in interest:
        return "Research Scientist"

    # --- NETWORKING ---
    elif skill_level >= 7 and "network" in interest:
        return "Network Engineer"

    # --- DEFAULT ---
    else:
        return "Career Counselor or further skill development recommended."

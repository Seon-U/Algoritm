function solution(id_list, report, k) {
    const reportedMap = new Map();
    const mailMap = new Map();

    id_list.forEach(id => {
        reportedMap.set(id, new Set());
        mailMap.set(id, 0);
    });

    for (const r of report) {
        const [reporter, reported] = r.split(" ");
        reportedMap.get(reported).add(reporter);
    }

    for (const [user, reporters] of reportedMap) {
        if (reporters.size >= k) {
            for (const reporter of reporters) {
                mailMap.set(reporter, mailMap.get(reporter) + 1);
            }
        }
    }

    return id_list.map(id => mailMap.get(id));
}
#!/bin/env python3

import csv


def reorder_date(d):
    [d, m, y] = d.split("-")
    return f"{y}-{m}-{d}"


with open("albums.csv", "r") as f:
    reader = csv.DictReader(f, delimiter=";")

    with open("build/albums.js", "w") as out:
        # Write main data array.
        out.write("albums = [")

        records = []
        idx = 0

        for row in reader:
            records.append(row | {"idx": idx, "sort_date": reorder_date(row["date"])})
            idx += 1

            out.write("{")
            for field, value in row.items():
                out.write(f'{field}: "{value}",')
            out.write("},")
        out.write("];")

        # Write ordering arrays.

        def write_order(name):
            out.write(f"\n{name} = {[r['idx'] for r in records]}")

        records.sort(key=lambda r: r["year"], reverse=True)  # oldest last
        write_order("year")

        records.sort(key=lambda r: r["band"])
        write_order("band")

        records.sort(key=lambda r: r["sort_date"], reverse=True)
        write_order("review_date")

        last_update = records[0]["date"]
        out.write(f'\nlast_update = "{last_update}"')
